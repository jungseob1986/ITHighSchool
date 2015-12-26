var _ = require('lodash');

var array1 = [1,2,3,4,5,6,7,8,9,10];

var result = _.filter(array1, function(data) {
	return data === 2;
});

var array2 = [{name:'a', age:10},{name:'b', age:20},{name:'c', age:30}];

var result2 = _.filter(array2, function(data) {
	return data.age > 10;
});

var result3 = [];
for(var i=0; i<array2.length; i++) {
	if(array2[i].age > 10) {
		result3.push(array2[i]);
	}
}

var array3 = [{name:'a', age:10},{name:'b', age:20},{name:'c', age:30}];

var result4 = _.map(array3, function(data) {
	return {age: data.age+1}
});

var array4 = [{name:'a', age:10},{name:'b', age:20},{name:'a', age:30}];

// result5 나이가 20살 이상인 객체를 {license: '이름:나이'}
// 형태의 배열로 반들어보기

var result5 = _.map(_.filter(array4, function(data) {
	return data.age >= 20;
}), function(data) {
	return {license: data.name+':'+data.age}
});

console.log(result5);