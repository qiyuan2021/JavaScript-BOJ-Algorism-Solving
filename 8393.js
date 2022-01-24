let input = require('fs').readFileSync('input.txt').toString().split('\n');

const a = parseInt(input[0]);

let answer = 0;

for (let i=1; i <= a; i++) {
  answer = answer + i;
}

console.log(answer);
