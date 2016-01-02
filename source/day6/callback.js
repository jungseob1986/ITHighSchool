// step1
// fs.exists('./copy.txt', function (exists) {
//   console.log(exists ? "it's there" : 'no passwd!');
// });
// step2
// fs.readFile('./copy.txt', "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
// step3 >> test.txt 내용을 message.txt 파일로 복사하기
// fs.writeFile('paste.txt', 'copy.txt 내용', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });
var fs = require('fs');
// step1, step2, step3 을 차례대로 수행하기
fs.exists('./copy.txt', function (exists) {
  if(exists) {
  	console.log("it's there");
  	fs.readFile('./copy.txt', "utf-8", function (err, data) {
		  if (err) throw err;
		  fs.writeFile('paste.txt', data, function (err) {
			  if (err) throw err;
			  console.log('It\'s saved!');
			});
		});
  } else {
  	console.log("it's not exists");
  }
});
