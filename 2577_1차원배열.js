let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let result = (input[0] * input[1] * input[2]) + "";
//세수를 곱하여 문자열로 반환

let count = new Array(10).fill(0); 
//값이 0인 10개의 원소를 가진 배열을 생성. 

for (i=0; i< result.length; i++) {
    count[Number (result[i])]++
}
//count 배열에 중복되는 횟수로 ++ 해주기. 여기서 몇번째 0이면 즉 숫자 몇이다. 

for (let i=0; i<10; i++ ){
  console.log(count[i]);
}
