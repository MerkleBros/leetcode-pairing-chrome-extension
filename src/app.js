import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';

const BASE_URL = "https://serene-peak-49404.herokuapp.com";
const TESTING_BASE_URL = "http://localhost:3000";
const CURRENT_URL = TESTING_BASE_URL;

const SERVER_AUTHENTICATION_URL = CURRENT_URL + "/login";
const RC_DATA_URL = CURRENT_URL + "/getRCData";
const GUEST_DATA_URL = CURRENT_URL + "/getGuestData";
const USER_LIST_URL = CURRENT_URL + "/getUserList";
const POST_PROBLEM_URL = CURRENT_URL + "/postProblem";

let data = {
  appTabId: undefined,
  leetCodeTabId: undefined,
  problem: undefined,
  partner: undefined,
  authenticationCode: undefined,
  userToken: undefined,
  me: undefined,
  userList: undefined,
  loginType: undefined
}

async function initializeApp() {
  data.appTabId = await getAppTabId();
  await sendBackgroundAppTabId();
  data.leetCodeTabId =  await getLeetCodeTabId();

  if(data.leetCodeTabId) {
    data.problem = await requestProblemData();
  }

  data.loginType = await requestLoginType();

  if (data.loginType == "RC"){
    await getAuthentication();
    data.authenticationCode = await getAuthenticationCode();
    data.me = await requestRCData();
    data.userToken = data.me.token.token;
  }
  else{
    data.me = await requestGuestData();
  }

  if (data.problem){
    await postProblem();
  }
  await requestUserList();
  console.log(data)
  renderApp(data);
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
    request.send(JSON.stringify({id:data.me.id,problem:problem}));
  })
}

async function requestUserList(){
  data.userList = await sendRequest({
                          url: USER_LIST_URL,
                          headerType: 'Authorization',
                          headerData: "Bearer " + JSON.stringify(data.userToken)})
}

function renderApp(appData) {
  ReactDOM.render(
    <App data={appData} userList={data.userList} me={data.me} />,
    document.getElementById('root')
  );
}

class App extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
    this.state={currentPage:"lobby" }
    this.goToRoom=this.goToRoom.bind(this)
    this.goToLobby=this.goToLobby.bind(this)
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
		<Room partner={this.props.data.partner} goToLobby={this.goToLobby} />;
	if (this.state.currentPage=="lobby") page =  
		<Lobby userList={this.props.userList} me={this.props.me} goToRoom={this.goToRoom} />;

	return (
		<div id={this.props.id}>
			Leetcode Pairing
			{page}
		</div>
	)
  }
}

initializeApp();
