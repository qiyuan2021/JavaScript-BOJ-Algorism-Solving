let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

//한수 인지 여부를 판별하는 함수
function f(n) {
  let str = n + "";
  if (n.length ==1) {
    return true;
  } else {
    let diff = Number(str[1]) - Number(str[0]);

    for(let i=1; i < str.length -1; i++ ) {
      //2자리 숫자 일 경우 밑의 for문 작동 불가, 그래서 return true;
      //3자리 숫자 일 경우, 10000일 경우, diff와 비교하여 등차수열 인지 판별함
      if (Number(str[i+1]) - Number(str[i]) != diff ) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
}

let n = Number(input[0]);
let result = 0; 

//결과를 카운팅 하기
for(let i =1; i <= n; i++) {
  if(f(i)) {
    result += 1;
  }
}

console.log(result);
