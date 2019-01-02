var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var hackerschool = require('hackerschool-api');
var client = hackerschool.client();

var auth = hackerschool.auth({
  client_id: "15fde852e88d09fa5e337d58a1293f400e27fc72fd0ae44cea039749260760b6",
  client_secret: "763a70d494f2a7ef3c9074988bccf0a485dca6ef29bd3aa9738a667500bb8266",
  redirect_uri: "http://localhost:3000/oauthCallback"
});

app.get('/login', function(req, res) {
  var authUrl = auth.createAuthUrl();

  // redirect the user to the auth page
  res.redirect(authUrl);
});

app.get('/oauthCallback', function(req, res) {
  var code = req.query.code;
  console.log('oauthCallback route called with code: ' + code)
  res.send(code);
  // auth.getToken(code)
  // .then(function(token) {
  //   // tells the client instance to use this token for all requests
  //   client.setToken(token);
  //   console.log('token was set: ' + JSON.stringify(token))
  //   res.authenticationToken = token;
  //   res.redirect('authenticated.html');
  // }, function(err) {
  //   res.send('There was an error getting the token');
  // });
});

app.get('/getRCers', function(req, res) {

});

app.listen(3000);
//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('connected', {data: 5});
});

server.listen(5000);
console.log('Listening on port 5000');
