import React from 'react';
import ReactDOM from 'react-dom';
import './room/roomStyles.css';
import './lobby/lobbyStyles.css';
import { Room } from './room/room.js';
import { Lobby } from './lobby/lobby.js';


const data = {
  problem:{title:"Easy Problem",
           difficulty:"easy",
           number: 666,
           description: 'Determine if NP=P'
          },
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={currentPage:"room" }
  }


  changePage(page){
  	this.setState({currentPage:page })
  }

  render(){
	const {
		currentPage
	} = this.state
	return (
		<div id={this.props.id}>
			
			<button onClick={() => {this.changePage("room")}}>room</button>
			<button onClick={() => {this.changePage("lobby")}}>lobby</button>
			
			{ currentPage === 'room'
			  ? <Room partner={data} />
			  : '' 
			}
		    { currentPage === 'lobby'
			  ? <Lobby />
			  : '' 
			}
		</div>
		)
  }
}

ReactDOM.render(
  <App datas={[]} />,
  document.getElementById('root')
);