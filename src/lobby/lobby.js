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
        </div>)
  }
}