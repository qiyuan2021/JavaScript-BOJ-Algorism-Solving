let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
//10898번 문제는 메모리 제한 때문에 js로 풀 수가 없음!
//c언어는 할 줄 모름... 

let n = Number(input[0]);
let cnt = Array(10001).fill(0);

for (let i=1; i <=n; i++) {
  let current = Number(input[i]);
  cnt[current] += 1;
}
console.log(cnt);

let answer = "";
for (let i =1; i<= 10000; i++) {
  for (let j=0; j <cnt[i]; j++) {
    answer += i + "\n";
  }
}

console.log(answer);
