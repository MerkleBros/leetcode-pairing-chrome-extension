import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

import CodeMirror from 'react-codemirror';
import './codemirror-5.42.2/lib/codemirror.css';
import './codemirror-5.42.2/theme/3024-night.css';

class StatusBar extends React.Component{
  constructor(props){
    super(props)
    this.partner=props.partner
    this.state={partnerConnected:false, partnerAction:"idle" }
  }

  getInitialState() {
    return {
      code: "// Code",
    };
  }
  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }

  render(){
     return (
        <div id={this.props.id}>
            <img src={this.partner.avatarUrl} ></img>
            You are pairing with: {this.partner.name} <span>&nbsp;</span>
            Partner Status:   {this.state.partnerConnected ? "connected" : "disconnected"} <span>&nbsp;</span>
            Partner is:{this.state.partnerAction}
            var options = {
                            lineNumbers: true,
                          };
            return <CodeMirror value={"hello world"} />
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

export class Room extends React.Component {
  constructor(props){
    super(props)
  }


  createCodeMirror(){
    let mirror =CodeMirror(document.body)
    return mirror
  }


  render(){
    return (<React.Fragment>
      {//<StatusBar  id="bar" partner={this.props.partner} />
    }
      <button onClick={this.props.goToLobby}>back to lobby</button><br></br>
      <div id="mirror">
        <StatusBar value="" />
      </div>
      <Chat id="rightHalf"  />
      </React.Fragment>)
  }
}

