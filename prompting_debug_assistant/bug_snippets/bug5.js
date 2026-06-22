const jsonData = '{"name":"Sarah","age":28}';

const user = JSON.parse(jsonData);

const ageNextYear = user.age + "1";

console.log("Age next year:", ageNextYear);

const userName = user.Name.toUpperCase();

console.log(userName);
