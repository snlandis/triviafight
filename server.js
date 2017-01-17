var express = require('express');
//create the app
var app = express();
var http = require('http');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const INDEX = __dirname + '/index.html';


var userController = require('./server/controllers/user-controller.js');
var WebsocketServer = require('ws').Server;
var cors = require('cors')

var app = express();


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
// ALLOW cors

app.use(cors());

app.get('http://localhost:3000', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(80, function(){
  console.log('CORS-enabled web server listening on port 80');
});

// server to use , allows you to use functionality
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//User Create
app.post('/signup', userController.signup);


//functions
function updatePeople(username, id){
  var userArray = [];
  for (key in people){
    if (people[key] === username){
      return;
    }
    userArray.push(people[key]);
  }
  userArray.push(username);
  people[id] = username;
  clientUsers = userArray;
}
