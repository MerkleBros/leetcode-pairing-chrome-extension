import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

//import {Controlled as CodeMirror} from 'react-codemirror2'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

let codeMirrorOptions={   
  mode: 'xml',
  theme: 'material',
  lineNumbers: true 
}


export class Room extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log('asdasdad')
    return (<React.Fragment>
      <StatusBar  id="bar" partner="zudsfefesewfewfck" />
      <button onClick={this.props.goToLobby}>back to lobby</button><br></br>
      <div id="leftHalf">
      <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
      />
      </div>
      <Chat id="rightHalf"  />
  </React.Fragment>)
  }
}


class StatusBar extends React.Component{
  constructor(props){
    super(props)
    this.state={partnerConnected:false, partnerAction:"idle" }
  }

  render(){
     return (
        <div id={this.props.id}>
            <img src={"https://media.nbcchicago.com/images/652*489/092310MarkZuckerberg01.jpg"} ></img>
            You are pairing with: {this.props.partner} <span>&nbsp;</span>
            Partner Status:   {this.state.partnerConnected ? "connected" : "disconnected"} <span>&nbsp;</span>
            Partner is: {this.state.partnerAction}
        </div>)
  }
}

class Chat extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (<div id={this.props.id}>
          <textarea rows="20" cols="50">
          </textarea>
          <form action="#">
            <input type="text" name="message" id="chatInput"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>)
  }
}
