/*
문제1)
1부터 10까지 값이 들어있는 배열을 만들고,
인덱스와 값을 출력하기
*/
var foo = [1,2,3,4,5,6,7,8,9,10];
for(var i=0; i<10; i++) {
	console.log(i, foo[i]);
}

/*
문제2)
foo의 값을 2배로 출력하기
*/
for(var i=0; i<10; i++) {
	console.log(i, foo[i]*2);
}


/*
문제3)
새로운 배열 bar에 foo의 값을 하나씩 push 해서
인덱스와 값을 출력하기
*/
var bar = [];
for(var i=0; i<10; i++) {
	bar.push(foo[i]);
}
console.log(bar);