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
            <Chat id="rightHalf" userName={UserArr[0].profileInfo.name} />
            <UserList id="leftHalf" UserArr={UserArr} />
        </div>)
  }
}

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state={chatLog:"",
                chatInput:""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({chatInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

        this.setState({
          chatLog:this.state.chatLog+=this.props.userName+": "+
          this.state.chatInput+"\n",
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
  
  selectUser(user){
    this.setState({selectedUser:user});
  }

  createList(){
    let list=[]
    this.props.UserArr.forEach(user=>{
      list.push(<UserInfo user={user} 
                          key={user.profileInfo.name} 
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

  renderPairingButton(){
    if (myName!=this.props.user.profileInfo.name){
      return <button>Pair With Me</button>
    }
  }
  renderDescription(){
    if (this.state.showDescription && this.props.currentUser==this.props.user.profileInfo.name) 
      return this.props.user.problem.description
  }
  toggleDescription(){
    if (this.props.currentUser!=this.props.user.profileInfo.name){
      this.props.selectUser(this.props.user.profileInfo.name);
      this.setState({showDescription:true})
    }
    else this.setState({showDescription:!this.state.showDescription})
  }

  render(){
     return (
        <div className={this.props.className}>
          <img src={this.props.user.profileInfo.avatarUrl} ></img>
          <span className="userName">{this.props.user.profileInfo.name} &nbsp;</span>
          {this.renderPairingButton()}
          <br></br>
          <strong>Prob{"             "}lem #</strong> {this.props.user.problem.number} <span>&nbsp;</span>
          <strong>Title:</strong> {this.props.user.problem.title} <span>&nbsp;</span>
          <strong>Difficulty:</strong> {this.props.user.problem.difficulty} <span>&nbsp;</span>
          <strong>Language:</strong> {this.props.user.problem.language}
          <button onClick={this.toggleDescription}>
          Problem Description:</button><br></br>
          {this.renderDescription()}
        </div>)
  }
}