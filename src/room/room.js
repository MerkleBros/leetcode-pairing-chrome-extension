import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/clike/clike');
require('codemirror/mode/python/python');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/swift/swift');
require('codemirror/mode/go/go');
require('codemirror/mode/rust/rust');
require('codemirror/mode/php/php');

//Scala not included in codemirror library, added as clike
let supportedLanguages = {
  'C++': 'clike',
  'Java': 'clike',
  'Python': 'python',
  'Python3': 'python',
  'C': 'clike',
  'C#': 'clike',
  'Javascript': 'javascript',
  'Ruby': 'ruby',
  'Swift': 'swift',
  'Go': 'go',
  'Scala': 'clike',
  'Kotlin': 'clike',
  'Rust': 'rust',
  'PHP': 'php'
}

let Peer = require('simple-peer')
let peer,mediaStream

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
    //TODO: remove event listers from sockets before unmount
    this.killed = false;
  }
  componentDidMount(){
    navigator.getUserMedia({ video: true, audio: true }, this.gotMedia,
      function(medias){
        mediaStream = medias.getTracks()
      })

  }
  componentWillUnmount(){
    this.killed = true;
    peer.destroy();
  }

  gotMedia (stream) {
    peer = new Peer({ initiator: true, stream: stream })
    peer.on('signal', (function (offer) {
      //send offer to other peer through websocket
      console.log('sent offer')
      this.props.socket.emit("guestSendsOfferToHostApp",offer);
    }).bind(this))

    this.props.socket.on('hostSendsAnswerToGuestApp',function(answer){
      if (this.killed) {
        return;
      }
      peer.signal(answer);
    }.bind(this));

    peer.on('stream', (function (stream) {
      this.refs.vidRef.srcObject = stream;
      this.refs.vidRef.play();
    }).bind(this))
  }

  listenForCodeChange(){
    this.props.socket.on('hostSendsCodeChange', (function(msg){
      if (this.state.codeValue!=msg && this.state.lastReceivedCode != msg) {
        this.setState({lastReceivedCode:msg,codeValue:msg})
      }
    }).bind(this));

    this.props.socket.on('hostSendsResultsToGuestApp',(function(results){
      this.setState({'results':results})
    }).bind(this))
  }

  render(){

    let language = 
      supportedLanguages[this.props.me.partnerData.problem.language]

    let codeMirrorOptions = {
      mode: language,
      theme: 'material',
      lineNumbers: true 
    }

    return (<React.Fragment>
      <div id="leftHalf" className="noHeight">
        <CodeMirror
          value={this.state.codeValue}
          options={codeMirrorOptions}

          onBeforeChange={(editor, data, value) => {
            this.setState({codeValue: value})
          }}
          onChange={(editor, data, value) => {
            if (this.state.lastReceivedCode != value){
              this.props.socket.emit("guestSendsCodeChange",{code:value});
            }
          }
        }
        />
        <ResultsBar results={this.state.results}/>
      </div>
      <div id="rightHalf">
        <div className="center">You Are Pairing With: {this.props.me.partnerData.name}</div>
        <video ref="vidRef"></video>
        <StatusBar me={this.props.me} />
      </div>
  </React.Fragment>)
  }
}

class StatusBar extends React.Component{
  constructor(props){
    super(props)
  }

  partnerData(){
    if (this.props.me.isPairingNow){
      return (<div>
        <div className="center">
          <br></br>
          {this.props.me.partnerData.problem.title} 
        </div>
        <pre className="problemData">{this.props.me.partnerData.problem.description}</pre>
        </div>)
    }
  }

  render(){
     return (
        <div>
          {this.partnerData()}
        </div>)
  }
}

class ResultsBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (
        <div className="resultsBar">
          Results:<br></br>
          <pre>{this.props.results}</pre>
        </div>)
  }
}