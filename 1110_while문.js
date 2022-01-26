let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let start = n;
let count = 0; 

while (true){
  //n을 문자열로 변경 하기 
  n = n + "";
  //10보다 작은 경우 앞에 0을 붙이기
  if (n.length === 1) {
    n = "0" + n;
  }

  //자릿수의 합
  summary = Number(n[0]) + Number(n[1])
  //주어진 수의 가장 오른 쪽 자리수의 합의 가장 오른쪽 자리수 붙이기
  n = Number(n[1]) * 10 + summary % 10;

  count += 1
  if (n === start ) break;
}

console.log(count)
