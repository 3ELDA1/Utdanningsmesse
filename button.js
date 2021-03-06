// Import frameworks
var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io')(server);

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var five = require("johnny-five"),
  board, button, button1, button2;

board = new five.Board();

board.on("ready", function() {
  button1 = new five.Button(2);
  button2 = new five.Button(3);
  board.repl.inject({
    button: button
  });

  // Button 1 down state
  button1.on("down", function() {
    console.log("B1 - down");
  });

  // Button 2 down state
  button2.on("down", function() {
    console.log("B2 - down");
  });
  // Button 1 hold state
  button1.on("hold", function() {
    console.log("B1 - hold");
  });

  // Button 2 hold state
  button2.on("hold", function() {
    console.log("B2 - hold");
  });
  // Button 1 up state
  button1.on("up", function() {
    console.log("B1 - up");
  });

  // Button 2 up state
  button2.on("up", function() {
    console.log("B2 - up");
  });
});