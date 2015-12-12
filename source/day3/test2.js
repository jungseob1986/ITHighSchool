var user1 = {name: "aaaa", age: 10, item: ['item1', 'item2']};
var user2 = {name: "bbbb", age: 20, item: ['item1', 'item3']};
var user3 = {name: "cccc", age: 30, item: ['item3', 'item4']};
var user4 = {name: "dddd", age: 40, item: ['item1', 'item5']};

var users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

//users.pop(); // 뒤부터 삭제함
//users.splice(2,1);

for(var i=0; i<users.length; i++) {

	if(users[i].name === 'aaaa') {
		console.log('이름은 '+users[i].name+"입니다.");
		console.log('나이는 '+users[i].age+"입니다.");
		console.log('아이템은 '+users[i].item+"입니다.");
		console.log('---------------------------------');
		break;
	}

}