var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on("new-message",function(msg){
    console.log (msg)
    io.emit("receive-message",msg)
  })
})

http.listen("https://serene-river-23829.herokuapp.com", function(){
  console.log("connected")
});
