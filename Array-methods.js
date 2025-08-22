let arr = [1, 2, 3, 4, 5];

// 🔹 length
console.log(arr.length); // 5

// 🔹 push
arr.push(6);
console.log(arr); // [1,2,3,4,5,6]

// 🔹 pop
arr.pop();
console.log(arr); // [1,2,3,4,5]

// 🔹 unshift
arr.unshift(0);
console.log(arr); // [0,1,2,3,4,5]

// 🔹 shift
arr.shift();
console.log(arr); // [1,2,3,4,5]

// 🔹 concat
console.log(arr.concat([6, 7])); // [1,2,3,4,5,6,7]

// 🔹 join
console.log(arr.join("-")); // "1-2-3-4-5"

// 🔹 slice
console.log(arr.slice(1, 3)); // [2,3]

// 🔹 splice (start, deleteCount, addItems...)
arr.splice(2, 1, 99);
console.log(arr); // [1,2,99,4,5]

// 🔹 indexOf
console.log(arr.indexOf(99)); // 2

// 🔹 lastIndexOf
console.log([1,2,3,2].lastIndexOf(2)); // 3

// 🔹 includes
console.log(arr.includes(4)); // true

// 🔹 find
console.log(arr.find(x => x > 3)); // 99

// 🔹 findIndex
console.log(arr.findIndex(x => x > 3)); // 2

// 🔹 filter
console.log(arr.filter(x => x > 2)); // [99,4,5]

// 🔹 map
console.log(arr.map(x => x * 2)); // [2,4,198,8,10]

// 🔹 forEach
arr.forEach(x => console.log("Val:", x));

// 🔹 reduce
console.log(arr.reduce((sum, x) => sum + x, 0)); // 111

// 🔹 some
console.log(arr.some(x => x > 100)); // false

// 🔹 every
console.log(arr.every(x => x > 0)); // true

// 🔹 sort
console.log([5,3,9,1].sort((a,b)=>a-b)); // [1,3,5,9]

// 🔹 reverse
console.log([1,2,3].reverse()); // [3,2,1]

// 🔹 flat
console.log([1,[2,[3]]].flat(2)); // [1,2,3]

// 🔹 flatMap
console.log([1,2,3].flatMap(x=>[x,x*2])); // [1,2,2,4,3,6]

// 🔹 toString
console.log(arr.toString()); // "1,2,99,4,5"
