var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)
var path = require('path')

app.get('/', function(req, res) {
   res.sendFile(path.resolve(__dirname+'/index.html'))
});

//execute when user is connected
io.on('connection', socket =>{
	console.log(' A is connected')

	//when disconnect
	socket.on('disconnect', ()=>{
		console.log('A usee haa discomnectef')
	})

})

http.listen(3003, function() {
   console.log('listening on *:3003');
});
