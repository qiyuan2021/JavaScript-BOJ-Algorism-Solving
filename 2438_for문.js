
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = "";
for (let i = 0; i < n; i++) { 
  //행 만큼 반복하기 
  for(let j=0; j<=i; j++) {
//     현재 행의 숫자 +1 만큼 별을 출력하기
    result += "*";
  }
  result += "\n";

}

console.log(result);
