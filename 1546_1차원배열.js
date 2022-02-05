let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(" ");

let M = data.reduce((a,b) => Math.max(a,b));

let result = [];
for (let i=0; i < data.length; i++) {
   result.push(data[i]/M * 100);
}

  let summary = result.reduce((a, b) => a + b);
    console.log(summary / n); 
