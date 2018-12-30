import React from 'react';
import ReactDOM from 'react-dom';
import './lobbyStyles.css';

const UserArr = [
  {
    problem:{title:"Easy Problem",
             difficulty:"easy",
             number: 666,
             description: 'Determine if NP=P'
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
             description: 'Determine if P=P'
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
             description: 'Determine if 1=2'
            },
    profileInfo: {
      name: 'Other Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  }
];


export class Lobby extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (
        <div id={this.props.id}>
            Lobby
            <button onClick={this.props.goToRoom}>go to room</button>
            <Chat id="rightHalf"  />
            <UserList id="leftHalf" UserArr={UserArr} />
        </div>)
  }
}

class Chat extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (
        <div id={this.props.id}>
          <textarea rows="30" cols="50">
          </textarea>
          <form action="#">
            <input type="text" name="message" id="chatInput"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        )
  }
}

class UserList extends React.Component{
  constructor(props){
    super(props)
  }

  createList(){
    let list=[]
    this.props.UserArr.forEach(user=>{
      list.push(<UserInfo user={user} key={user.profileInfo.name+user.profileInfo.avatarUrl} className="userListElement" />)
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
  }

  render(){
     return (
        <div className={this.props.className}>
          <img src={this.props.user.profileInfo.avatarUrl} ></img>
          {this.props.user.profileInfo.name} <span>&nbsp;</span>
          <button>Pair With Me</button>
          <br></br>
          Problem #: {this.props.user.problem.number} <span>&nbsp;</span>
          Title: {this.props.user.problem.title} <span>&nbsp;</span>
          Difficulty: {this.props.user.problem.difficulty}
        </div>)
  }
}