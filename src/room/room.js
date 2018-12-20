import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';



class StatusBar extends React.Component{
  constructor(props){
    super(props)
    this.partner=props.partner
    this.state={partnerConnected:false, partnerAction:"idle" }
  }
  render(){
     return (
        <div id={this.props.id}>
            <img src={this.partner.avatarUrl} ></img>
            You are pairing with: {this.partner.name} <span>&nbsp;</span>
            Partner Status:   {this.state.partnerConnected ? "connected" : "disconnected"} <span>&nbsp;</span>
            Partner is:{this.state.partnerAction}
        </div>)
  }
}

export class Room extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (<React.Fragment>
      <StatusBar  id="bar" partner={this.props.partner} />
      </React.Fragment>)
  }
}