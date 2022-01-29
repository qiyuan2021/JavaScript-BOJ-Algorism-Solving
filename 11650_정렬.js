let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0])
let arr = [];
for (let i=1; i<= n; i++) {
  arr.push(input[i].split(' ').map((num)=>Number(num)));
}

function compare(a,b){
  if (a[0]==b[0]){
    return a[1] - b[1]
  } else {
    return a[0]- b[0];
  }
} 

arr.sort(compare);

result = ""; 
for (let i=0; i < n; i++) {
  result += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(result);
