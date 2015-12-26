// callback function

var fs = require('fs');

var something1 = function(callback) {
	fs.readFile('./list.txt', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	  console.log('something1-2');
	});
	console.log('something1-1');
	if(callback) {
		callback();
	}
}

var something2 = function(callback) {
	console.log('something2');
	if(callback) {
		callback();
	}
}

var something3 = function(callback) {
	console.log('something3');
	if(callback) {
		callback();
	}
}

var start = function() {
	something1();
	something2();
	something3();
}

start();