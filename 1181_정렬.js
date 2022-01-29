let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0])
let data = [];

for (let i=1; i<= n; i++) {
  data.push(input[i])
}

data.sort((a,b)=> {
  if(a.length != b.length) return a.length - b.length;
  else {
    if(a<b) return -1;
    else if( a>b ) return 1;
    else return 0;
  }
})

let mySet = new Set();

for (let i=0; i<n; i++) {
  mySet.add(data[i]);
}

data2 = [];
for (let x of mySet) {
  data2.push(x);
}

result = ""; 
for (let i=0; i < data2.length; i++) {
  result += data2[i] + "\n";
}

console.log(result);

