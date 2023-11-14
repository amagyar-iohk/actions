let test = process.env.OTHER || "not found"
let test2 = process.env.TEST || "not found"

console.log("other", test.split(""))
console.log("test", test2.split(""))