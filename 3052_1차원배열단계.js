let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let data = input.map((number)=> Number(number));
let mySet = new Set();

for (let i=0; i <10; i++) {
  mySet.add(data[i] %42);
}

console.log(mySet.size);
