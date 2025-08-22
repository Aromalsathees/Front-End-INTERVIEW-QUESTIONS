let str = "  Hello JavaScript!  ";

// 🔹 Length
console.log(str.length); // 19

// 🔹 toUpperCase
console.log(str.toUpperCase()); // "  HELLO JAVASCRIPT!  "

// 🔹 toLowerCase
console.log(str.toLowerCase()); // "  hello javascript!  "

// 🔹 trim
console.log(str.trim()); // "Hello JavaScript!"

// 🔹 slice(start, end)
console.log(str.slice(2, 7)); // "Hello"

// 🔹 substring(start, end)
console.log(str.substring(2, 7)); // "Hello"

// 🔹 substr(start, length)
console.log(str.substr(2, 5)); // "Hello"

// 🔹 replace
console.log(str.replace("JavaScript", "World")); // "  Hello World!  "

// 🔹 replaceAll
console.log("a-b-c".replaceAll("-", "_")); // "a_b_c"

// 🔹 split
console.log(str.trim().split(" ")); // ["Hello", "JavaScript!"]

// 🔹 includes
console.log(str.includes("Java")); // true

// 🔹 indexOf
console.log(str.indexOf("Java")); // 8

// 🔹 lastIndexOf
console.log("abcabc".lastIndexOf("a")); // 3

// 🔹 startsWith
console.log(str.trim().startsWith("Hello")); // true

// 🔹 endsWith
console.log(str.trim().endsWith("!")); // true

// 🔹 charAt
console.log(str.charAt(2)); // "H"

// 🔹 charCodeAt
console.log("A".charCodeAt(0)); // 65

// 🔹 concat
console.log("Hello".concat(" ", "World")); // "Hello World"

// 🔹 repeat
console.log("Hi ".repeat(3)); // "Hi Hi Hi "

// 🔹 padStart
console.log("5".padStart(3, "0")); // "005"

// 🔹 padEnd
console.log("5".padEnd(3, "0")); // "500"
