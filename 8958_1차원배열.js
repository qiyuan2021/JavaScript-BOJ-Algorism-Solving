let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let num = Number(input[0]);

for (let i= 1; i <=num; i++) {
  //OX문제를 테스트 케이스별로 순회한다. 
  let count =0;
  let sum = 0; 
  //count는 연속으로 맞는 횟수이다

for (let j=0; j < input[i].length; j++){
  //이중 for문으로 j로 단일 테스트 케이스 안의 OX를 하나씩 O인지 비교한다. 
  //만약 아니면 count를 0으로 초기화 한다. 
  if (input[i][j] === "O" ) {
    count ++ ;
  } else {
    count = 0;
  }
  sum += count;

}
  console.log(sum);
}

