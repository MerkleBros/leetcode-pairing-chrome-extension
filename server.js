var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var hackerschool = require('hackerschool-api');
var client = hackerschool.client();

var auth = hackerschool.auth({
  client_id: "bfcac41280381547a5e755c6668265b89ac7a8c69c0c36ad8afb02660124cb3e",
  client_secret: "1fb71ece7517c1a2d46e11487eeb2812b68f9e71dad0c2e5e03b6b9ca4e89058",
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
  auth.getToken(code)
  .then(function(token) {
    // tells the client instance to use this token for all requests
    client.setToken(token);
    console.log('token was set: ' + JSON.stringify(token))
    res.redirect('dist/index.html')
  }, function(err) {
    res.send('There was an error getting the token');
  });
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
