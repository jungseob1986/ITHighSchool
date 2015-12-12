var callback = function(result) {
  console.log("결과: " + result);
}

var add = function(a, b, cb) {
  var result = a+b;
  cb(result);
}

var sub = function(a, b, cb) {
	var result = a-b;
	cb(result);
}

add(1,2, function(result) {
	console.log("덧셈 결과: " + result);
});

sub(8,2,function(result) {
	console.log("빼기 결과: " + result);
})

// add(1, 2, callback);
// sub(8, 2, callback);