import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';

let data = {
  leetCodeTabId: undefined,
  problem: undefined,
  partner: undefined
}

chrome.runtime.sendMessage(
  {type: "appWantsLeetCodeId"},
  function (response){
    data.leetCodeTabId = response.leetCodeTabId;
    requestProblemData();
  }
);

function requestProblemData(){
  chrome.tabs.sendMessage(
    data.leetCodeTabId, 
    {type: "requestProblemData"}, 
    function(response) {
      console.log(response)
      data.problem = response.problem;
      data.partner = response.partner;
        ReactDOM.render(
          <App data={data} />,
          document.getElementById('root')
        );
    }
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
		<Lobby goToRoom={this.goToRoom} />;

	return (
		<div id={this.props.id}>
			Leetcode Pairing
			{page}
		</div>
	)
  }
}
