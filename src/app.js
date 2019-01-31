import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';
import io from 'socket.io-client';

const BASE_URL = "https://leetcode-pairing.herokuapp.com/";
// const TESTING_BASE_URL = "http://localhost:3000";
// const TESTING_WEBSOCKET_URL = 'http://localhost:5000';

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
  }

  data.loginType = await requestLoginType();

  resetBackgroundScript();

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
  data.socket = await connectSocket();

  data.socket.on('connect', function(msg) {
    data.socket.emit('clientToken',{'id':data.initialMe.id, 'token': data.initialMe.webSocketToken});

    data.socket.on("guestSendsOfferToHostApp", function(offer){
      chrome.tabs.sendMessage(
        data.leetCodeTabId, 
        {'type': "appSendsContentOffer",'offer':offer}
      );
    })

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
      
      if (message.type=="contentSendsAppAnswer"){
        data.socket.emit('hostSendsAnswerToGuestApp',message.answer);
      }

      if (message.type=="contentSendsAppResults"){
        data.socket.emit('hostSendsResultsToGuestApp',message.text);
      }
    })
  });

  renderApp(data);
  startHeartBeat();
}

function resetBackgroundScript(){
  chrome.runtime.sendMessage({type: "BackgroundShouldDeleteAllData"})
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

async function connectSocket(){
  return new Promise(function(res){
    let socket = io.connect(WEBSOCKET_URL);
    res(socket);
  })
}

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
    this.updateMe("updateProfileMessage","sfdsdfsfddsf");
    this.sendPairingRequest = this.sendPairingRequest.bind(this);
    this.listenForPairingRequest = this.listenForPairingRequest.bind(this);
    this.listenForPairingRequest();
    this.startPairing = this.startPairing.bind(this);
    this.listenForCodeChange = this.listenForCodeChange.bind(this);
    this.listenForCodeChange();
    this.killPartner = this.killPartner.bind(this);
  }  

  sendPairingRequest(partnerId){
    this.props.socket.emit('requestPairWith',
      {
        partnerId: partnerId,
        meId: this.state.me.id
      });
  }

  listenForPairingRequest(){
    this.props.socket.on('pairingConfirmed',
      (function(msg) {
        if (msg.host==this.state.me.id){
          this.startPairing(msg.guest, 'host');
        }
        else{
          this.startPairing(msg.host, 'guest');
        }
      }).bind(this));
  }

  listenForCodeChange(){
    //if I am the host relay to content when guest edits code
    this.props.socket.on('guestSendsCodeChange',(function(msg){
        chrome.tabs.sendMessage(data.leetCodeTabId, 
        {type: "appSendingContentCodeChange", code: msg});
    }).bind(this));
    //if I am the host relay from content when I edit code
    chrome.runtime.onMessage.addListener((function (message, sender, sendResponse) {
      if (message.type == "contentSendingAppCodeChange"){
        this.props.socket.emit("hostSendsCodeChange",{code:message.code})
      }

      if (message.type == "leetCodeTabClosed" && this.state.me.isPairingHost){
        alert("You closed LeetCode. Logging out now.")
        window.close();
      }      

    }).bind(this));
  }

  startPairing(partnerId, myRole){
    this.updateMe('updatePartnerId',partnerId);
    this.updateMe('updatePartnerData',this.state.userList[partnerId]);

    if (myRole=='guest'){
      this.updateMe('updateIsPairingHost',false);
      this.updateMe('updateIsPairingNow',true);
    }
    if (myRole=='host'){
      this.updateMe('updateIsPairingHost',true);
      this.updateMe('updateIsPairingNow',true);
      //switch tab to leetcode
      chrome.tabs.update(data.leetCodeTabId, { highlighted: true, active: true });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.me.isPairingHost==false &&
      (prevState.me.isPairingNow==false && this.state.me.isPairingNow==true))
      this.goToRoom();
  }


  updateMe(key,value){
    let message = {
      'id': this.state.me.id,
      'flag': key,
      'value': value
    }
    this.props.socket.emit('updateUser', message);
  }

  listenForUpdateMe(){
    this.props.socket.on('updateMe',(function(user) {
      this.setState({'me': user});
    }).bind(this));
  }

  listenForUpdateUser(){
    this.props.socket.on('updateUser',(function(user) {
      let updatedUserList = this.state.userList;
      updatedUserList[user.id]=user;
      this.setState({userList: updatedUserList});
    }).bind(this));
  }

  listenForKillUser(){
    this.props.socket.on('killUser',(function(id) {
      if (id==this.state.me.partnerId) this.killPartner();
      let updatedUserList = this.state.userList;
      delete updatedUserList[id];
      this.setState({userList: updatedUserList});
    }).bind(this));
  }

  //should be called if host leetcode window is closed
  killPartner(){
    if (this.state.me.isPairingHost){
      //send message to content, content displays alert
      chrome.tabs.sendMessage(
      data.leetCodeTabId, 
      {type: "partnerKilled"}
      );
    }
    else{
      alert("Partner Disconnected.");
      this.goToLobby();
    }
    this.updateMe('updateIsPairingNow',false);
    this.updateMe('updatePartnerId',undefined);
    this.updateMe('updatePartnerData',undefined);
    this.updateMe('updateIsPairingHost',false);
  }


  goToRoom(){
  	this.setState({currentPage:"room" })
  }
  goToLobby(){
  	this.setState({currentPage:"lobby" })
  }

  page(){
    let page
    if (this.state.currentPage=="room"){ 
      page =  
      <Room 
        me={this.state.me}
        socket={this.props.socket}       
        goToLobby={this.goToLobby} 
      />;
    }
    if (this.state.currentPage=="lobby") 
      page =  
      <Lobby 
        updateMe = {this.updateMe}
        socket={this.props.socket}
        userList={this.state.userList} 
        me={this.state.me} 
        goToRoom={this.goToRoom}
        id="lobby"
        sendPairingRequest={this.sendPairingRequest}
      />;
      return page;
  }

  render(){
	return (
		<div id={this.props.id}>
			{this.page()}
		</div>
	)
  }
}

initializeApp();
