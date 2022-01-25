let input = require('fs').readFileSync('input.txt').toString().split('\n');


for (let i = 1; i <=input[0]; i++){
  let numbers = input[i].split(' ')
  console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}

//내가 실수한 부분: + 연산부호가 ${} 안에 있어요. 숫자들 사이의 "+" 가 문자열이 되지 않는다. 
