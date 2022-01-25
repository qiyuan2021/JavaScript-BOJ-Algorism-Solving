
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

let result = "";
for (let i = 0; i < n; i++) {
  //각 층 마다 먼저 공백을 출력
  for(let j = 0; j<= n - i -2; j++) {
    result += " ";
  }
  for (let j =0; j<=i; j++) {
  //각 층 마다 이어서 별을 출력 
    result += "*";
  }
  result += "\n";
}

console.log(result);
