var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var hackerschool = require('hackerschool-api');
var client = hackerschool.client();

var auth = hackerschool.auth({
  client_id: "client-id-from-rc",
  client_secret: "client-secret-from-rc",
  redirect_uri: "http://localhost:3000"
});

app.get('/login', function(req, res) {
  var authUrl = auth.createAuthUrl();

  // redirect the user to the auth page
  res.redirect(authUrl);
});

app.get('/oauthCallback', function(req, res) {
  var code = req.query.code;

  auth.getToken(code)
  .then(function(token) {
    // tells the client instance to use this token for all requests
    client.setToken(token);
  }, function(err) {
    res.send('There was an error getting the token');
  });
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