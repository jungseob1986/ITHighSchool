var fs = require('fs');
var Q = require('q');

var exists = function() {
	var deferred = Q.defer();
	fs.exists('./copy.txt', function (exists) {
		deferred.resolve(exists);
	});
	return deferred.promise;
}
var readFile = Q.denodeify(fs.readFile);
var writeFile = Q.denodeify(fs.writeFile);

return exists()
	.then(function(exists){
		console.log('exists 실행')
		if(exists) {
			return readFile('./copy.txt', "utf-8");
		}
	})
	.then(function(data){
		console.log('readFile 실행')
		return writeFile('paste.txt', data);
	})
	.then(function(){
		console.log('writeFile 실행');
	});