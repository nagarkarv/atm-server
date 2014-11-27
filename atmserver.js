var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

function start(){ 
io.on('connection', function(socket){
		console.log('New Connection request to connect from server:' + socket);
		socket.on('atm:signup', function(userInfo){
			console.log('----Sign up initiated for: '+userInfo.userName + '----');
			console.log('First Name: '+userInfo.firstName);
			console.log('Last Name: '+userInfo.lastName);
			console.log('EMail Name: '+userInfo.email);
			console.log('----------------------------');
		});
		socket.on('atm:login', function(userInfo){
			console.log('Login initiated for: '+userInfo.userName);
			// TO DO : Authenticate user
		});
		socket.on('atm:logout', function(userInfo){
			console.log('User Logout: '+userInfo.userName);
		});
		
	});

server.listen(8000,function(){
	console.log('Server listening on port 8000');
	console.log('http://127.0.0.1:8000/');
});
}

exports.start = start;