let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const testcases = Number(input[0]);

for (let t =1; t<= testcases; t++) {
  let data = input[t].split(' ').map(Number);
  //data에 배열의 형식으로 각 케이스 데이터 담기
  let n =data[0];
  //첫번째 수는 데이터의 개수
  let summary = 0;
  for(let i=1; i <=n; i++) {
    summary += data[i];
  }
  let average = summary /n;
  //for문을 사용하여 각 케이스별의 합과 평균을 구하기

  let count = 0;
  for (let i=1; i<=n; i++){
   if(data[i] > average) {
     count +=1;
   } 
  }
  //그 중 몇개가 평균 이사인지 카운팅하기 
  
console.log(`${(count / n * 100).toFixed(3)}%`)
  //소수점 아래 3자리만 남겨서 출력하기 
}
