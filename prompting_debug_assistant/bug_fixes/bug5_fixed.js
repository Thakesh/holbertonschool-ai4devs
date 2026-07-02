const jsonData = '{"name":"Sarah","age":28}';

const user = JSON.parse(jsonData);

// FIX 1: ensure numeric addition
const ageNextYear = user.age + 1;

console.log("Age next year:", ageNextYear);

// FIX 2: correct property name (name not Name)
const userName = user.name.toUpperCase();

console.log(userName);
