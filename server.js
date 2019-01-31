var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var hackerschool = require('hackerschool-api');

var port = process.env.PORT || 3000;
var serverUrl = 
  process.env.PORT ? 
  "https://leetcode-pairing.herokuapp.com" :
  "http://localhost:3000"

var bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const serverUserList = {};
const clientUserList = {};

let auth;
if(process.env.PORT) {
  auth = hackerschool.auth({
    client_id: "9d323b83065d3f0dc4c1daeee398d5716afc1409cb1a2933d706d1654325d75b",
    client_secret: "48d3914e8bebf4c8e424b27fda8178e1e2b8e2473baaf31a4ce0152e8be494d9",
    redirect_uri: serverUrl + "/oauthCallback"
  });
}
else {
  auth = hackerschool.auth({
    client_id: "15fde852e88d09fa5e337d58a1293f400e27fc72fd0ae44cea039749260760b6",
    client_secret: "763a70d494f2a7ef3c9074988bccf0a485dca6ef29bd3aa9738a667500bb8266",
    redirect_uri: serverUrl + "/oauthCallback"
  }); 
}


app.get('/login', function(req, res) {
  var authUrl = auth.createAuthUrl();

  // redirect the user to the auth page
  res.redirect(authUrl);
});

app.get('/oauthCallback', function(req, res) {
  var code = req.query.code;
  console.log('oauthCallback route called with code: ' + code)
  res.send(code);

});

// app.get('/getRCData',function(req,res){
//   let token = req.header('Authorization')
//   //console.log(token.slice(7))
//   //res.send()
// });

app.get('/getRCData', function(req, res) {
  var code = req.query.code;
  auth.getToken(code)
  .then(function(token) {

    var client = hackerschool.client();
    client.setToken(token);
    
    client.people.me()
    .then(function(me) {
      let name;
      if (!me.middle_name) name=me.first_name+" "+me.last_name
      else name=me.first_name+" "+me.middle_name+" "+me.last_name

      let webSocketToken = Math.round(Math.random()*1000000000)
      let baseUserData = {
        id: me.id,
        name: name,
        hasPhoto: me.has_photo,
        image: me.image,
        hasLeetCodeProblem: false,
        problem: undefined,
        isPairingNow: false,
        isPairingHost: false,
        customDescription: undefined,
        partnerId: undefined,
        partnerData: undefined
      }
      let meData = Object.assign({token: token, webSocketToken: webSocketToken}, baseUserData)
      let userSession = Object.assign({client: client, heartBeats: 10}, meData);

      addUserToServerUserList(userSession);
      emitUpdateUser(userSession);
      res.send(meData);
    });
  }, function(err) {
    res.send('There was an error getting the token');
  });
});

app.get('/getGuestData', function(req, res) {

  let rand = Math.round(Math.random()*1000000000)

  let baseUserData = {
    id: rand,
    name: "guest_"+rand,
    hasPhoto:false,
    image:undefined,
    hasLeetCodeProblem:false,
    problem:undefined,
    isPairingNow:false,
    isPairingHost:false,
    customDescription: undefined,
    partnerId:undefined,
    partnerData:undefined
  }
  let webSocketToken = Math.round(Math.random()*1000000000)
  let meData = Object.assign({webSocketToken: webSocketToken}, baseUserData)
  let userSession = Object.assign({heartBeats: 10}, meData)
  addUserToServerUserList(userSession);
  emitUpdateUser(userSession);
  res.send(meData);
});

app.post('/postProblem', function(req,res){
  var id=req.body.id;
  var problem=req.body.problem;

  serverUserList[id].hasLeetCodeProblem = true;
  serverUserList[id].problem = JSON.parse(problem);

  res.send("got it")
});


app.get('/getUserList', function(req,res){
  res.send(createClientUserList(serverUserList));
});

// app.listen(port);
//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/', function(req, res){
 res.send("it works")
});

server.listen(port);

io.on('connection', function(socket){
  //console.log('connection count: ' + io.engine.clientsCount);
  
  socket.on('clientToken', function(msg){
    //console.log("checking client socket token")

    // if (serverUserList[msg.id].webSocketToken == msg.token){
    //   console.log("got client socket token")
    //console.log(msg)
    if (serverUserList[msg.id]) serverUserList[msg.id].socket = socket;
    // }
    // else{
    //   socket.disconnect(true);
    // }
  })

  socket.on('lobbyChatMessage', function (msg) {
    io.emit('lobbyChatMessage', msg);
  });

  socket.on('requestPairWith', function(msg) {

    let requester = serverUserList[msg.meId];
    let target = serverUserList[msg.partnerId];
    let host,guest;

    if(target.hasLeetCodeProblem || requester.hasLeetCodeProblem) {

      host = target.hasLeetCodeProblem ? target : requester
      guest = target.hasLeetCodeProblem ? requester : target
      let roomName = 'room-' + host.id + guest.id
      socket.join(roomName);
      target.socket.join(roomName);

      io.to(roomName).emit('pairingConfirmed', {'host':host.id, 'guest': guest.id});

      host.socket.on('hostSendsCodeChange',function(msg){
        host.socket.to(roomName).emit('hostSendsCodeChange', msg.code);
      })
      guest.socket.on('guestSendsCodeChange',function(msg){
        guest.socket.to(roomName).emit('guestSendsCodeChange', msg.code);
      })
      
      //webRTC
      guest.socket.on('guestSendsOfferToHostApp',function(offer){
        guest.socket.to(roomName).emit('guestSendsOfferToHostApp', offer);
      })
      host.socket.on('hostSendsAnswerToGuestApp',function(answer){
        host.socket.to(roomName).emit('hostSendsAnswerToGuestApp', answer);
      })
      //partner killed
      guest.socket.on('partnerKilled',function(){
        guest.socket.emit('partnerKilled',{})
      })
      host.socket.on('partnerKilled',function(){
        host.socket.emit('partnerKilled',{})
      })
      //send code results
      host.socket.on('hostSendsResultsToGuestApp',function(results){
        host.socket.to(roomName).emit('hostSendsResultsToGuestApp',results)
      })

    }
    else {
      socket.emit('Pairing Error: Neither partner has a leetcode problem.');
    }
  });

  socket.on('updateUser', function (message) {
    // message object: {id: "", flag: "", value: ""}
    // if(serverUserList[message.id].socket.id !== socket.id) {
    //   return;
    // }
    switch (message.flag) {
      // TODO: UPdate problem data
      // case "updateLanguage":
      //   serverUserList[message.id]. = message.value;
      //   break;
      case "updateProfileMessage":
        serverUserList[message.id].profileMessage = message.value;
        break;
      case "updateCustomDescription":
        serverUserList[message.id].customDescription = message.value;
        break;
      case "updateIsPairingNow":
        serverUserList[message.id].isPairingNow = message.value;
        break;
      case "updatePartnerId":
        serverUserList[message.id].partnerId = message.value;
        break;
      case "updateIsPairingHost":
        serverUserList[message.id].isPairingHost = message.value;
        break;
      case "updatePartnerData":
        serverUserList[message.id].partnerData = message.value;
        break;      
    }
    //console.log('updateUser',JSON.stringify(serverUserList[message.id]))
    socket.emit('updateMe',createMeUser(serverUserList[message.id]));
    io.emit('updateUser', createClientUser(serverUserList[message.id]));
  });

  socket.on('heartBeat', function (userId) {
    if (serverUserList[userId]){
      serverUserList[userId].heartBeats = 10;
    }
  });

});

function createMeUser(user){
  let me = createClientUser(user)
  return Object.assign(
   {token: user.token,    
    isPairingHost:user.isPairingHost,
    partnerId:user.partnerId,
    partnerData:user.partnerData
  }, me)
}


function addUserToServerUserList(user) {
  serverUserList[user.id] = user;
  emitUpdateUser(user);
}

function emitUpdateUser(user){
  io.emit('updateUser', createClientUser(serverUserList[user.id]));
}

function createClientUser(user) {
  let userObject = {
    id: user.id,
    name: user.name,
    hasPhoto: user.hasPhoto,
    image: user.image,
    hasLeetCodeProblem: user.hasLeetCodeProblem,
    problem: user.problem,
    isPairingNow: user.isPairingNow,
    isPairingHost: user.isPairingHost,
    partnerId: user.partnerId,
    customDescription: user.customDescription
  }
  return userObject;
}

function createClientUserList(userList) {
  let newList = {};
  Object.values(userList).forEach((user) => {
    newList[user.id] = createClientUser(user);
  });
  return newList;
}

startHeartBeat();

function startHeartBeat(){
  setInterval(function(){
    Object.values(serverUserList).forEach(user=>{
      user.heartBeats-=1;
      if (user.heartBeats==0){
        killUser(user.id);
      }
    })
  },500)
}

function killUser(id){
  if (serverUserList[id].isPairingNow){
    let roomName
    if (serverUserList[id].isPairingHost) {
      roomName = 'room-' + id + serverUserList[id].partnerId
    }
    else {
      roomName = 'room-' + serverUserList[id].partnerId +id
    }
    serverUserList[id].socket.to(roomName).emit('partnerKilled', {});    
  }
  delete serverUserList[id];
  io.emit('killUser', id);
}


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// server.listen(5000);
// console.log('Listening on port 5000');
