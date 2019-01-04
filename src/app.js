import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';

const SERVER_AUTHENTICATION_URL = "http://localhost:3000/login";
const ME_URL = "http://localhost:3000/getMe";
const USER_LIST_URL = "http://localhost:3000/getUserList";

let data = {
  appTabId: undefined,
  leetCodeTabId: undefined,
  problem: undefined,
  partner: undefined,
  authenticationCode: undefined,
  userToken: undefined,
  me: undefined,
  userList: undefined
}

async function initializeApp() {
  data.appTabId = await getAppTabId();
  await sendBackgroundAppTabId();
  data.leetCodeTabId =  await getLeetCodeTabId();

  if(data.leetCodeTabId) {
    let problemData = await requestProblemData();
    console.log('problem data: ' + JSON.stringify(problemData));
    data.problem = problemData;
  }
  
  await getAuthentication();
  data.authenticationCode = await getAuthenticationCode();
  await requestMe();
  await requestUserList();
  console.log(data)
  renderApp(data);
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

async function requestMe(){
  data.me = await sendRequest({url: ME_URL,query:"?code="+data.authenticationCode})
  data.userToken = data.me.token.token;
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