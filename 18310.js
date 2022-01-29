let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
     arr.sort((a, b) => a - b);
// 가운데(median) 값을 출력
console.log(arr[parseInt((n - 1) / 2)]);

// 중앙값(Median)에 해당하는 위치의 집에 안테나를 설치했을 때 거리의 총합이 최소가 됩니다.
// • 다음과 같이 집의 위치가 구성되어 있다고 해봅시다.

// • 3의 위치에 안테나를 설치하는 경우 • 2+1+2+5+6=16

// • 2의 위치에 안테나를 설치하는 경우 • 1+1+3+6+7=18
