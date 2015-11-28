var array = [1,2,3];

// push, pop

array.push(4);
console.log(array);

array.push(5,6,7);
console.log(array);

array.pop();
array.pop();
array.pop();

console.log(array);

array.unshift(0);
console.log(array);

array.shift();
console.log(array);

array[0]=100;
console.log(array);