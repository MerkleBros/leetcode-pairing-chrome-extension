import React from 'react';
import ReactDOM from 'react-dom';
import './roomStyles.css';

const data = {
  problem:{title:"Easy Problem",
           difficulty:"easy",
           number: 666,
           description: 'Determine if NP=P'
          },
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};

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

class App extends React.Component {
  constructor(props){
    super(props)
    this.properties=props.datas
  }
  render(){
    return (<React.Fragment>
      <StatusBar  id="bar" partner={this.properties.partner} />
      </React.Fragment>)
  }
}
 
ReactDOM.render(
  <App datas={data} />,
  document.getElementById('root')
);
     // <Problem problem={this.props.problem} />
    //      <Code />
     //     <Notes />