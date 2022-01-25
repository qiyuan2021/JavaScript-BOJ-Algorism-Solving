
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');


let n = Number(input[0])

let data = input[1].split(' ').map(x=> Number(x));

let minValue = 1000000;  //가장 큰 값으로 초기화
let maxValue = -1000000; //가장 작은 값으로 초기화

for (let i = 0; i < n; i++) {
  let curValue = data[i];
  if (curValue < minValue ) {minValue = curValue};
  if (curValue > maxValue ) {maxValue = curValue};
}

console.log(minValue + " " + maxValue);

------

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');


let n = Number(input[0])

let data = input[1].split(' ').map(x=> Number(x));

let minValue = data.reduce((a, b) => Math.min(a,b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue)
