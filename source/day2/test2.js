// 객체를 만들어 보기
var a = {};
a['name']='jungseob';
a['age']=30;
var b = {'name': 'jungseob', 'age': 30};
var c = {name: 'jungseob', age: 30};
var d = new Object();
d['name']='jungseob';
d['age']=30;
var d = {};
d.name = 'jungseob';
d.age = 30;

console.log(a); console.log(typeof(a));
console.log(b); console.log(typeof(b));
console.log(c); console.log(typeof(c));
console.log(d); console.log(typeof(d));