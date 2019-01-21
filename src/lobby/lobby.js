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
            <Chat id="rightHalf" me={this.props.me} socket={this.props.socket} />
            <UserList 
              id = "leftHalf" 
              userList = {this.props.userList} 
              me = {this.props.me} 
              updateMe = {this.props.updateMe}
              sendPairingRequest={this.props.sendPairingRequest}
            />
          <div id="credits">
            Leetcode Pairing By Douglas Lerner and Patrick McCaver. <br></br>
            Special Thanks to Cory Forsyth and Justin Venezuela
          </div>
        </div>)
  }
}

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chatLog:"",
      chatInput:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.listenToChat = this.listenToChat.bind(this);
    this.listenToChat();
  }

  listenToChat(){
    this.props.socket.on('lobbyChatMessage',(function(msg) {
      this.setState({
        chatLog: (this.state.chatLog + msg)
      });
    }).bind(this));
  }
  
  handleChange(event) {
    this.setState({chatInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let chatLog = this.props.me.name + ": " + this.state.chatInput+"\n"
    this.props.socket.emit('lobbyChatMessage', chatLog);
    this.setState({
      chatInput:""
    })
  }

  render(){
     return (
        <div id={this.props.id}>
          <textarea rows="20" cols="50" value={this.state.chatLog} readOnly></textarea>
          <form onSubmit={this.handleSubmit}>
            <textarea rows="3" cols="50" value={this.state.chatInput} onChange={this.handleChange}></textarea>
            <input type="submit" value="Submit" id="submitButton" />
          </form>
        </div>)
  }
}

class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state={selectedUser:undefined}
    this.selectUser=this.selectUser.bind(this)
  }
  
  selectUser(userID){
    this.setState({selectedUser:userID});
  }

  createList(){
    let list=[]
    Object.values(this.props.userList).forEach(user=>{
      list.push(<UserInfo user = {user}
                          me = {this.props.me} 
                          key = {user.id} 
                          className = "userListElement" 
                          selectUser = {this.selectUser} 
                          currentUser = {this.state.selectedUser}  
                          updateMe = {this.props.updateMe}
                          sendPairingRequest={this.props.sendPairingRequest}
                />)
    })
    return list;
  }

  render(){
     return (
      <div id={this.props.id}>
        {this.createList()}
      </div>)
  }
}

class UserInfo extends React.Component{
  constructor(props){
    super(props)
    if (this.props.me.id==this.props.user.id){
      this.state = {
        showDescription: false,
        customDescriptionFormText: "",
        doneEditingCustomText: false
      };
    }
    else
      this.state = {
        showDescription: false,
        customDescriptionFormText: ""
      };
    this.toggleDescription = this.toggleDescription.bind(this);
    this.submitCustomDescription = this.submitCustomDescription.bind(this);
    this.handleCustomDescriptionFormText = this.handleCustomDescriptionFormText.bind(this);
  }

  renderProfilePic(){
    if (this.props.user.hasPhoto){
      return <img src={this.props.user.image} ></img>
    }
  }

  renderPairingButton(){
    if (this.props.me.id!=this.props.user.id && this.props.user.isPairingNow==false &&
      this.props.me.isPairingNow==false &&
      (this.props.me.hasLeetCodeProblem || this.props.user.hasLeetCodeProblem)){
      return <button onClick={()=>{this.props.sendPairingRequest(this.props.user.id)}} >Pair With Me</button>
    }
    if (this.props.user.isPairingNow==true){
      return <div>I am currently pairing.</div>
    }
  }

  renderDescription(){
    if(this.state.showDescription && this.props.currentUser==this.props.user.id){ 
        return (<div className="preserveFormatting">
                <br></br>
                {this.props.user.problem.description}
               </div>)
      }
  }

  renderCustomDescription(){
    let isCurrentUser = this.props.me.id === this.props.user.id
    let customDescription = this.props.user.customDescription || ""
    
    let submitCustomDescriptionButtonStyle =
      this.state.doneEditingCustomText ? "inline" : null

    let submitCustomDescriptionButtonText =
      this.state.doneEditingCustomText ? "Edit message" : "Submit"

    let submitCustomDescriptionBox =
    this.state.doneEditingCustomText==false ?  
      <label>
        Enter Custom Message:
        <input type="text" value={this.state.customDescriptionFormText} onChange={this.handleCustomDescriptionFormText} />
      </label>
    : <span>{'User message: ' + customDescription}</span>

    let submitCustomDescriptionForm =  
      <form onSubmit={this.submitCustomDescription} className={submitCustomDescriptionButtonStyle}>
        {submitCustomDescriptionBox}
        <input type="submit" value={submitCustomDescriptionButtonText}/>
      </form>

    return (
      <div>
        {isCurrentUser ? submitCustomDescriptionForm : 
          ( this.props.user.customDescription ?('User message: ' + this.props.user.customDescription):null)}
      </div>
    )
  }

  handleCustomDescriptionFormText(event){
    this.setState({customDescriptionFormText: event.target.value});
  }

  submitCustomDescription(event) {
    event.preventDefault();
    this.props.updateMe(
      "updateCustomDescription",
      this.state.customDescriptionFormText
    );
    this.setState({doneEditingCustomText:!this.state.doneEditingCustomText});
  }

  renderProblemInfo(){
    if (this.props.user.hasLeetCodeProblem){
      return <div>
        <strong>Problem:</strong> {this.props.user.problem.title} <span>&nbsp;</span>
        <strong>Difficulty:</strong> {this.props.user.problem.difficulty} <span>&nbsp;</span>
        <strong>Language:</strong> {this.props.user.problem.language} <span>&nbsp;</span>
        <button onClick={this.toggleDescription}>
        Problem Description:</button>
        {this.renderDescription()}
      </div>
    }
    else{
      return <div>I would like to help you with your LeetCode problem.</div>
    }
  }

  toggleDescription(){
    if (this.props.currentUser!=this.props.user.id){
      this.props.selectUser(this.props.user.id);
      this.setState({showDescription:true})
    }
    else this.setState({showDescription:!this.state.showDescription})
  }


  render(){
     return (
        <div className={this.props.className}>
          {this.renderProfilePic()}
          <span className="userName">{this.props.user.name} &nbsp;</span>
          {this.renderPairingButton()}
          <br></br>
          {this.renderProblemInfo()}
          <br className="belowImage"></br>
          {this.renderCustomDescription()}
        </div>)
  }
}