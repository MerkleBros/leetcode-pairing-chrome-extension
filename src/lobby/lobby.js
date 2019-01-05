import React from 'react';
import ReactDOM from 'react-dom';
import './lobbyStyles.css';

const UserArr = [
  {
    problem:{title:"Easy Problem",
             difficulty:"hard",
             number: 666,
             description: 'Determine if NP=P',
             language:"javascript"
            },
    profileInfo: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  },
  {
    problem:{title:"Interesting Problem",
             difficulty:"hard",
             number: 555,
             description: 'Determine if P=P',
             language:"lavascript"
            },
    profileInfo: {
      name: 'Goodbye Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  },
  {
    problem:{title:"Boring Problem",
             difficulty:"easy",
             number: 444,
             description: 'Determine if 1=2',
             language:"scriptscript"
            },
    profileInfo: {
      name: 'Other Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  }
];

let myName="Hello Kitty"


export class Lobby extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (
        <div id={this.props.id}>
            <button onClick={this.props.goToRoom}>go to room</button><br></br>
            <Chat id="rightHalf" userName={this.props.me.name} socket={this.props.socket} />
            <UserList id="leftHalf" userList={this.props.userList} me={this.props.me} />
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
    let chatLog = this.props.userName+ ": " + this.state.chatInput+"\n"
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
      list.push(<UserInfo user={user}
                          me={this.props.me} 
                          key={user.id} 
                          className="userListElement" 
                          selectUser={this.selectUser} 
                          currentUser={this.state.selectedUser}  />)
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
    this.state={showDescription:false};
    this.toggleDescription=this.toggleDescription.bind(this)
  }

  renderProfilePic(){
    if (this.props.user.hasPhoto){
      return <img src={this.props.user.image} ></img>
    }
  }

  renderPairingButton(){
    if (this.props.me.id!=this.props.user.id){
      return <button>Pair With Me</button>
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
        </div>)
  }
}