let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 생성자를 만든는 함수를 구현함. 
function d(n){
  let result = 0;
  let str = n + "";
  for (let i=0; i < str.length; i++) {
    result += Number(str[i]);
  } 
  return result + n;
}

//0을 포함한 수열 0 - 10001까지 true로 채운다.그리하여 숫자의 서열이 즉 숫자 자신이 된다. 
let selfNumber = new Array(10001).fill(true);

//1-10000까지 생성함수에 넣어서 생성자가 있는 d(n)을 모두 false로 바꾸어준다. 
for (let i=1; i <=10000; i++) {
  let cur = d(i);
  if (cur <= 10000) {
    selfNumber[cur] = false;
  }
}

//selfNumber[i]가 true, 즉 셆프 넘버만 출력해서 제출한다. 
for (let i=1; i <= 10000; i++) {
  if (selfNumber[i]) {
    console.log(i);
  }
}
