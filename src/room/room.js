import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

var Peer = require('simple-peer')

let codeMirrorOptions={   
  mode: 'xml',
  theme: 'material',
  lineNumbers: true 
}

export class Room extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      codeValue:"", 
      cursorPosition:{ch: 0,line: 0,sticky: null}
    }
    this.listenForCodeChange = this.listenForCodeChange.bind(this);
    this.listenForCodeChange();

    //send message to host requesting initial leetcode code
    //initiate webRTC - get video/voice stream
    this.gotMedia = this.gotMedia.bind(this);
    navigator.getUserMedia({ video: true, audio: true }, this.gotMedia, function () {})
  }

  gotMedia (stream) {
    var peer = new Peer({ initiator: true, stream: stream })
    peer.on('signal', (function (offer) {
      //send offer to other peer through websocket
      this.props.socket.emit("guestSendsOfferToHostApp",offer);
    }).bind(this))

    this.props.socket.on('hostSendsAnswerToGuestApp',function(answer){
      peer.signal(answer);
    })


    peer.on('stream', (function (stream) {
      // let audioChat = document.createElement('audio');
      // audioChat.src = window.URL.createObjectURL(stream)
      // audioChat.play()
      // got remote video stream, now let's show it in a video tag
      var video = document.createElement('video');
      video.srcObject = stream
      document.body.appendChild(video);
      video.play()
    }).bind(this))
  }

  listenForCodeChange(){
    this.props.socket.on('hostSendsCodeChange', (function(msg){
      if (this.state.codeValue!=msg && this.state.lastReceivedCode != msg) {
        //debugger;
        console.log('partner typed something')
        console.log('partner msg'+msg)
        console.log('my code value'+this.state.codeValue)
        console.log('lastReceivedCode'+this.state.lastReceivedCode)

        this.setState({lastReceivedCode:msg,codeValue:msg})
      }
    }).bind(this));
  }

// /partner={this.props.me.partnerData.name}
  render(){
    return (<React.Fragment>
      <StatusBar  id="bar" partner={'asfsafa'} />
      <button onClick={this.props.goToLobby}>back to lobby</button><br></br>
      <div id="leftHalf">
      <CodeMirror
        value={this.state.codeValue}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}

        onBeforeChange={(editor, data, value) => {
          this.setState({codeValue: value})
        }}
        onChange={(editor, data, value) => {
          console.log('lastReceivedCode ' + this.state.lastReceivedCode)
          console.log('value ' + value)
          if (this.state.lastReceivedCode != value){
            console.log('I typed something')
            this.props.socket.emit("guestSendsCodeChange",{code:value});
          }
        }
      }
      />
      </div>
      <Chat id="rightHalf" />
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