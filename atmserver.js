var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var UserManagement = require('./usermgmt');

function start(){ 
io.on('connection', function(socket){
		console.log('New Connection request to connect from server:' + socket);
		
		socket.on('atm:signup', function(userInfo){
			console.log('----Sign up initiated for: '+userInfo.userName + '----');
			var user = new UserManagement(userInfo);
			user.signUp();
			socket.emit('atm:signup'+'SUCCESS', userInfo);
		});

		socket.on('atm:getSettings', function(userInfo){
			console.log('----getting settings for : '+userInfo.userName + '----');
			var user = new UserManagement(userInfo);
			socket.emit('atm:getSettings'+'SUCCESS', user.getSettings());
		});
		
		socket.on('atm:login', function(userInfo){
			console.log('Login initiated for: '+userInfo.userName);
			socket.on('atm:login'+'SUCCESS', userInfo);
			// TO DO : Authenticate user
		});
		socket.on('atm:logout', function(userInfo){
			console.log('Logging out user: '+userInfo.userName);
			var user = new UserManagement(userInfo);
			user.logout();
			socket.emit('atm:logout'+'SUCCESS', userInfo);
			console.log('User Logout: '+userInfo.userName);
		});
	});

server.listen(8000,function(){
	console.log('Server listening on port 8000');
	console.log('http://127.0.0.1:8000/');
});
}

exports.start = start;