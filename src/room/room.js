import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

let Peer = require('simple-peer')
let peer,mediaStream

let codeMirrorOptions={   
  mode: 'xml',
  theme: 'material',
  lineNumbers: true 
}

export class Room extends React.Component {
  constructor(props){
    super(props)
              console.log('room props', this.props)

    this.state = {
      codeValue:"", 
      cursorPosition:{ch: 0,line: 0,sticky: null}
    }
    this.listenForCodeChange = this.listenForCodeChange.bind(this);
    this.listenForCodeChange();

    //send message to host requesting initial leetcode code
    //initiate webRTC - get video/voice stream
    this.gotMedia = this.gotMedia.bind(this);
  }
  componentDidMount(){
    navigator.getUserMedia({ video: true, audio: true }, this.gotMedia,
      function(medias){
        mediaStream = medias.getTracks()
      })
    // .then(medias => {
    //   mediaStream = medias.getTracks()
    // })
  }
  componentWillUnmount(){
    console.log("will unmount")
    console.log(RTCPeerConnection.signalingState)
    peer.destroy();
    // peer = undefined;
    // mediaStream.forEach(track => track.stop())
  }

  gotMedia (stream) {
    peer = new Peer({ initiator: true, stream: stream })
    console.log(peer)
    peer.on('signal', (function (offer) {
      //send offer to other peer through websocket
      console.log('sent offer')
      this.props.socket.emit("guestSendsOfferToHostApp",offer);
    }).bind(this))

    this.props.socket.on('hostSendsAnswerToGuestApp',function(answer){
      console.log('got answer')
      console.log(answer)
      // peer._pc.signalingState="have-local-offer"
      peer.signal(answer);
    })

    peer.on('stream', (function (stream) {
      this.refs.vidRef.srcObject = stream;
      this.refs.vidRef.play();
    }).bind(this))
  }

  listenForCodeChange(){
    this.props.socket.on('hostSendsCodeChange', (function(msg){
      if (this.state.codeValue!=msg && this.state.lastReceivedCode != msg) {
        console.log('partner typed something')
        console.log('partner msg'+msg)
        console.log('my code value'+this.state.codeValue)
        console.log('lastReceivedCode'+this.state.lastReceivedCode)

        this.setState({lastReceivedCode:msg,codeValue:msg})
      }
    }).bind(this));
  }

  render(){
    return (<React.Fragment>
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
      <div id="rightHalf">
        <video ref="vidRef"></video>

      </div>
  </React.Fragment>)
  }
}
        // <StatusBar me={this.props.me}
        //            result={this.props.result}
        //            input={this.props.input}
        //            output={this.props.output}
        //            expected={this.props.expected}
        // />

// class StatusBar extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){

//      return (
//         <div>
//         {this.props.me.partnerData ? this.props.me.partnerData.image : null}
//         You Are Pairing With: {this.props.me.partnerData}<br></br><br></br>
//         Result: {this.props.result}<br></br><br></br>
//         Input: {this.props.input}<br></br><br></br>
//         Output: {this.props.output}<br></br><br></br>
//         Expected: {this.props.expected}
//         </div>)
//   }
// }
