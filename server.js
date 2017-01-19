var express = require('express');
//create the app
var app = express();
var twilio = require('twilio');

var http = require('http');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const INDEX = __dirname + '/index.html';





var userController = require('./server/controllers/user-controller.js');
var WebsocketServer = require('ws').Server;


var server = new WebsocketServer({ port: 3001 });
server.on('connection', function(socket) {
  socket.on('message', function(msg) {
    server.clients.forEach(function(other) {
      if(other === socket) {
        return;
      }

      other.send(msg);
    });
  });
});

// CHECK IF THE TRAFFIC IS ON HTTP or convert to HTTP
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});


// server to use , allows you to use functionality
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));
app.get('/', function(req, res, next){
  res.sendFile(__dirname + "/index.html");

});

app.get('/users', function(req, res){
  res.sendFile(__dirname + "/index2.html");
  var accountSid = "09b655e9e43e6848e2d10dc69be7db9a";
  var authToken = "AC316cbfecef94d28e96fa6ae8493ad82c";
  var client = require('twilio')(accountSid, authToken);
  client.messages.create({
    to: "5129251021",
    from: "+15125808084",
    body: "Someone has challenged you to a Trivia Fight! Accept the challenge @ https://trivia-fight.herokuapp.com/",
  }, function(err, message) {
    if(err){
      console.log(err);
    } else {
      console.log(message.sid);
    }
  });

  client.messages('SM8c60e27ad0914188a82299e56ab90cde').get(function(err, message) {
    console.log("Sent");
  });

});




//User Create
app.post('/signup', userController.signup);
