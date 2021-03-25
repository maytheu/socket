var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)
var path = require('path')

app.get('/', function(req, res) {
   res.sendFile(path.resolve(__dirname+'/index.html'))
});
let clients = 0

//execute when user is connected
io.on('connection', socket =>{
	console.log(' A is connected')

	//Send a message after a timeout of 4seconds
   setTimeout(function() {
      socket.send('Sent a message 4seconds after connection!');
   }, 4000);

	//Send a message with custome event
   setTimeout(function() {
      //Sending an object when emmiting an event
      socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
   }, 8000);


	//client request
	socket.on('clientEvent', function(data) {
      console.log(data);
   });

	//sending hroadcast
	clients++
	io.sockets.emit('broadcast', desc{clients+' clients connrcted'})

	//when disconnect
	socket.on('disconnect', ()=>{
		console.log('A usee haa discomnectef')
		clients--
		io.sockets.emit('broadcast',{desc{`${clients} clients comnected})
	})

})

http.listen(3003, function() {
   console.log('listening on *:3003');
});
