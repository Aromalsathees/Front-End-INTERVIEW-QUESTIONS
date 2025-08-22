// 1️⃣ Classic For Loop
for (let i = 0; i < 5; i++) {
  console.log("For:", i);
}
// Output: For: 0 ... For: 4

// 2️⃣ While Loop
let a = 0;
while (a < 3) {
  console.log("While:", a);
  a++;
}
// Output: While: 0, While: 1, While: 2

// 3️⃣ Do...While Loop
let b = 0;
do {
  console.log("DoWhile:", b);
  b++;
} while (b < 3);
// Output: DoWhile: 0, DoWhile: 1, DoWhile: 2

// 4️⃣ For...in Loop (iterate over keys)
let person = { name: "Arun", age: 22, place: "Kochi" };
for (let key in person) {
  console.log(key, ":", person[key]);
}
// Output: name : Arun, age : 22, place : Kochi

// 5️⃣ For...of Loop (iterate over values)
let arr = [10, 20, 30];
for (let value of arr) {
  console.log("ForOf:", value);
}
// Output: ForOf: 10, ForOf: 20, ForOf: 30

// 6️⃣ forEach (Array method)
arr.forEach((val, index) => {
  console.log("Index:", index, "Value:", val);
});
// Output: Index:0 Value:10 ... Index:2 Value:30

// 7️⃣ For...await...of (async iteration)
async function demo() {
  let promises = [
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
  ];
  for await (let val of promises) {
    console.log("ForAwaitOf:", val);
  }
}
demo();
// Output: ForAwaitOf: A ... ForAwaitOf: C

// 8️⃣ Labeled Loop (break outer loop)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log("Labeled:", i, j);
  }
}
/* Output:
Labeled: 0 0
Labeled: 0 1
Labeled: 0 2
Labeled: 1 0
*/
