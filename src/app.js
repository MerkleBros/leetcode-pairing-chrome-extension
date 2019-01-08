import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';
import io from 'socket.io-client';

const BASE_URL = "https://serene-peak-49404.herokuapp.com";
const TESTING_BASE_URL = "http://localhost:3000";
const TESTING_WEBSOCKET_URL = 'http://localhost:5000/';

const CURRENT_URL = BASE_URL;
// const WEBSOCKET_URL = TESTING_WEBSOCKET_URL;
const WEBSOCKET_URL= BASE_URL + ':5000';

const SERVER_AUTHENTICATION_URL = CURRENT_URL + "/login";
const RC_DATA_URL = CURRENT_URL + "/getRCData";
const GUEST_DATA_URL = CURRENT_URL + "/getGuestData";
const USER_LIST_URL = CURRENT_URL + "/getUserList";
const POST_PROBLEM_URL = CURRENT_URL + "/postProblem";

let data = {
  loginType: undefined,
  appTabId: undefined,
  leetCodeTabId: undefined,
  problem: undefined,
  partner: undefined,
  authenticationCode: undefined,
  userToken: undefined,
  initialMe:undefined,
  initialUserList: undefined,
}

async function initializeApp() {
  data.appTabId = await getAppTabId();
  await sendBackgroundAppTabId();
  data.leetCodeTabId =  await getLeetCodeTabId();

  if(data.leetCodeTabId) {
    data.problem = await requestProblemData();
    console.log('data.problem:');
    console.log(data.problem);
  }

  data.loginType = await requestLoginType();


  if (data.loginType == "RC"){
    await getAuthentication();
    data.authenticationCode = await getAuthenticationCode();
    data.initialMe = await requestRCData();
    data.userToken = data.initialMe.token.token;
  }
  else{
    data.initialMe = await requestGuestData();
  }

  if (data.problem){
    // data.initialMe.hasLeetCodeProblem=true;
    // data.initialMe.problem = data.problem;
    await postProblem();
  }
  await requestUserList();
  data.socket = connectSocket();
  renderApp(data);
  startHeartBeat();
}

function startHeartBeat(){
  setInterval(function(){
    data.socket.emit('heartBeat', data.initialMe.id);    
  },500)
}

async function requestLoginType(){
  return new Promise(function(resolve, reject) {
    chrome.runtime.sendMessage(
      {type: "appWantsLoginType"},
      function (response){
        resolve(response);
        return;
      })
  })
}

async function getAppTabId() {
  return new Promise(function(resolve, reject) {
    chrome.tabs.query(
      {currentWindow: true, active : true},
      function(tabArray) {
        resolve(tabArray[0].id);
        return;
      }
    )
  });
}
async function getLeetCodeTabId() {
  return new Promise(function(resolve, reject) {
    chrome.runtime.sendMessage(
      {type: "appWantsLeetCodeId"},
      function (response){
        resolve(response.leetCodeTabId);
        return;
      }
    );
  });
}

async function requestProblemData(){
  return new Promise(function(resolve, reject) {
    chrome.tabs.sendMessage(
      data.leetCodeTabId, 
      {type: "appWantsProblemData"}, 
      function(response) {
        resolve(response);
        return;
      }
    );
  }); 
}

async function sendBackgroundAppTabId() {
  return new Promise(function(resolve, reject) {
    chrome.runtime.sendMessage(
      {
        type: "appSendingBackgroundAppTabId",
        appTabId: data.appTabId 
      },
      function(response) {
        resolve();
        return;
      }
    );
  });
}

async function getAuthentication() {
  return new Promise(function(resolve, reject) {
    chrome.runtime.sendMessage(
      {
        type: "appWantsAuthentication",
        serverAuthenticationUrl: SERVER_AUTHENTICATION_URL
      },
      function(response) {
        resolve();
        return;
      }
    );
  });
}

async function getAuthenticationCode() {
  return new Promise(function(resolve, reject) {
    chrome.runtime.sendMessage(
      {
        type: "appWantsAuthenticationCode"
      },
      function(response) {
        // console.log('received auth code: ' + JSON.stringify(response));
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
          let responseFunction = sendResponse;
          if(message.type == "backgroundSendingAppAuthenticationCode") {
            resolve(message.authenticationCode);
            return;
          }
          return true;
        });
      }
    );
  });
}

function sendRequest({url,query = "",headerType,headerData}){
  return new Promise(function(resolve,reject){
      const request = new XMLHttpRequest();
      request.open('GET', url+query, true);
      if (headerType){
        request.setRequestHeader(headerType,headerData)
      }
      request.onreadystatechange=function(){
        resolve(JSON.parse(request.responseText));
      }
      request.send();
    }
  )
}

async function requestRCData(){
  let me = await sendRequest({url: RC_DATA_URL,query:"?code="+data.authenticationCode})
  return me;
}

async function requestGuestData(){
  let me = await sendRequest({url: GUEST_DATA_URL})
  return me;
}



async function postProblem(){
  return new Promise(function(resolve,reject){
    const request = new XMLHttpRequest();   // new HttpRequest instance 
    request.open("POST", POST_PROBLEM_URL, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let problem=JSON.stringify(data.problem);
    request.onreadystatechange=function(){
      resolve();
      return;
    }
    request.send(JSON.stringify({id:data.initialMe.id,problem:problem}));
  })
}

async function requestUserList(){
  data.initialUserList = await sendRequest({
                          url: USER_LIST_URL,
                          headerType: 'Authorization',
                          headerData: "Bearer " + JSON.stringify(data.userToken)})
}

function connectSocket(){
    let socket = io.connect(WEBSOCKET_URL);
    socket.on('connected', function(msg) {
        data.socket.emit('clientToken',{id:data.me.id, token: data.me.webSocketToken});
    });
    return socket;
}

// window.beforeunload = function() {
//     alert("Are you sure you want to leave this page?");
// }

function renderApp() {
  ReactDOM.render(
    <App socket = {data.socket} 
    initialUserList = {data.initialUserList} 
    initialMe = {data.initialMe} />,
    document.getElementById('root')
  );
}

class App extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
    this.state={
      currentPage: "lobby",
      userList: this.props.initialUserList, 
      me: this.props.initialMe
    }
    this.goToRoom=this.goToRoom.bind(this)
    this.goToLobby=this.goToLobby.bind(this)
    this.listenForUpdateMe = this.listenForUpdateMe.bind(this);
    this.listenForUpdateMe();
    this.listenForUpdateUser = this.listenForUpdateUser.bind(this);
    this.listenForUpdateUser();
    this.listenForKillUser = this.listenForKillUser.bind(this);
    this.listenForKillUser();
    this.updateMe = this.updateMe.bind(this);
  }

  updateMe(key,value){
    let message = {
      id: this.state.me.id,
      flag: key,
      value: value
    }
    this.props.socket.emit('updateUser', message);
  }

  listenForUpdateMe(){
    this.props.socket.on('updateMe',(function(user) {
      console.log("updating "+user.id)
      this.setState({
        me: user
      });
    }).bind(this));
  }

  listenForUpdateUser(){
    this.props.socket.on('updateUser',(function(user) {
      console.log("updating "+user.id)
      let updatedUserList = this.state.userList;
      updatedUserList[user.id]=user;
      this.setState({userList: updatedUserList});
    }).bind(this));
  }

  listenForKillUser(){
    this.props.socket.on('killUser',(function(id) {
      console.log("killing "+id)
      let updatedUserList = this.state.userList;
      delete updatedUserList[id];
      this.setState({userList: updatedUserList});
    }).bind(this));
  }

  goToRoom(){
  	this.setState({currentPage:"room" })
  }
  goToLobby(){
  	this.setState({currentPage:"lobby" })
  }

  render(){

	let page
	if (this.state.currentPage=="room") page =  
		<Room 
      partner={this.props.data.partner} 
      goToLobby={this.goToLobby} 
    />;
	if (this.state.currentPage=="lobby") page =  
		<Lobby 
      socket={this.props.socket}
      userList={this.state.userList} 
      me={this.state.me} 
      goToRoom={this.goToRoom}
      id="lobby"
    />;

	return (
		<div id={this.props.id}>
			Leetcode Pairing
			{page}
		</div>
	)
  }
}

initializeApp();
