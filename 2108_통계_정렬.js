let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

let data = [];
//산술 평균 계산하기
let sum = 0;
for (let i=1; i<= n; i++){
  data.push(input[i]);
  sum = sum + Number(input[i]);
} 
const mean = Math.round(sum/n);
//중위 값 계산하기
const arrSort = data.sort((a, b) => a - b);
const median = data[Math.floor(arrSort.length/2)];

//각 원소마다 출현 빈도 계산하고 중복되는 key를 없앰
let counter = new Map();
for (let i=0; i<n; i++) {
  if (counter.has(arrSort[i])) {
    counter.set(arrSort[i], counter.get(arrSort[i]) +1 );
  }
  else {
    counter.set(arrSort[i],1);
  }
}


//가장 빈도 높은 원소(숫자)들을 찾기 
let maxValue = 0;
let maxElements =[];
for (let key of counter.keys()) {
  if (maxValue < counter.get(key)) {
    maxValue = counter.get(key);
    maxElements = [key];
  } 
  else if (maxValue == counter.get(key)){
    maxElements.push(key);
  }
}

console.log(mean);
console.log(Number(median));

//가장 많이 나타나는 값 출력
if (maxElements.length >=2) {
  console.log(maxElements[1]);
} else {
  console.log(maxElements[0]);
}

console.log(arrSort[n-1] - arrSort[0]);
