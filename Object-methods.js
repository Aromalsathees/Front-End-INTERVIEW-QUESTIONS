let person = { name: "Arun", age: 22, place: "Kochi" };

// 🔹 Object.keys
console.log(Object.keys(person)); // ["name", "age", "place"]

// 🔹 Object.values
console.log(Object.values(person)); // ["Arun", 22, "Kochi"]

// 🔹 Object.entries
console.log(Object.entries(person));
// [["name","Arun"], ["age",22], ["place","Kochi"]]

// 🔹 hasOwnProperty
console.log(person.hasOwnProperty("age")); // true

// 🔹 Object.assign (merge objects)
let obj1 = { a: 1 }, obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2);
console.log(merged); // {a:1, b:2}

// 🔹 Spread operator alternative
let spreaded = { ...obj1, ...obj2 };
console.log(spreaded); // {a:1, b:2}

// 🔹 Object.freeze (no changes allowed)
let frozen = Object.freeze({ x: 10 });
frozen.x = 20;
console.log(frozen.x); // 10

// 🔹 Object.seal (values can change, keys can't add/remove)
let sealed = Object.seal({ y: 5 });
sealed.y = 99;
sealed.z = 100;
console.log(sealed); // {y: 99}

// 🔹 Object.create (prototype)
let proto = { greet: "hello" };
let obj = Object.create(proto);
console.log(obj.greet); // "hello"

// 🔹 Object.fromEntries
console.log(Object.fromEntries([["name","Arun"],["age",22]]));
// {name:"Arun", age:22}

// 🔹 Object.is
console.log(Object.is(5, 5)); // true
console.log(Object.is(NaN, NaN)); // true

// 🔹 Object.defineProperty
let user = {};
Object.defineProperty(user, "id", { value: 101, writable: false });
console.log(user.id); // 101
