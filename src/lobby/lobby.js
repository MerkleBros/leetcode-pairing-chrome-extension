import React from 'react';
import ReactDOM from 'react-dom';
import './lobbyStyles.css';

export class Lobby extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
     return (
        <div id={this.props.id}>
            Lobby
            <button onClick={this.props.goToRoom}>go to room</button>
        </div>)
  }
}