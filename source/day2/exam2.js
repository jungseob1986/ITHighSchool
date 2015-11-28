// 1. 파라미터로 배열을 받아 배열의 값을 출력하는 함수 foo를 완성하세요.
var foo = function(array) {
	for(var i=0; i<array.length; i++) {
		console.log(array[i]);
	}
};

// 2. 파라미터로 배열 2개를 받아서 첫 번째 배열의 값을 두 번째 배열에 복사하는 함수 bar를 완성하세요.
var bar = function(array1, array2) {
	for(var i=0; i<array1.length; i++) {
		array2.push(array1[i]);
	}
	console.log({array1:array1});
	console.log({array2:array2});
};

// 3. users 배열을 선언하고, (이름, 나이) 파라미터를 받아서 user object를 ({name: '', age: ''}) 만들어서 users 배열에 추가하는 함수 signup 을 만드세요.
var users = [];
var signup = function(name, age) {
	var user = {name: name, age: age};
	users.push(user);
	console.log(name+'가입 완료');
	console.log(users);
};

// 4. 이름 파라미터를 받아서 users 배열에서 삭제하는 함수 signout 함수를 만드세요.
//참고) 배열의 splice 내장 함수를 사용
// var test = [1,2,3]; 
// 배열.spice(index, 삭제할 크기)
// test.splice(2,1); // test = [1,2] 가 됨

var signout = function(name) {
	for(var i=0; i<users.length; i++) {
		if(users[i].name === name) {
			// 이름이 같다면, 삭제하고 나오기
			users.splice(i,1);
			console.log(name+'탈퇴 완료');
			break;
		}
	}
	console.log(users);
}

//5. (이름, 나이) 파라미터를 받아서 users 배열에서 해당하는 object를 찾아서 나이를 수정하는 함수 modify 를 만드세요.

var modify = function(name, age) {
	for(var i=0; i<users.length; i++) {
		if(users[i].name === name) {
			// 이름이 같다면, 나이를 수정하고 나오기
			users[i].age = age;
			console.log(name+'의 나이를 '+age+'로 수정완료');
			break;
		}
	}
	console.log(users);
}


signup('홍길동', 30);
signup('김철수', 20);
signup('윤형태', 10);

signout('김철수');

modify('홍길동', 10);