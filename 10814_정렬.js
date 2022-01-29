let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0])
let data = [];
for (let i=1; i<= n; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1]
  data.push([age,name])
}

data.sort((a,b)=> {
  if (a[0] != b[0] ) {
    return a[0] - b[0]
  }
})

result = ""; 
for (let i=0; i < n; i++) {
  result += data[i][0] + " " + data[i][1] + "\n";
}

console.log(result);
