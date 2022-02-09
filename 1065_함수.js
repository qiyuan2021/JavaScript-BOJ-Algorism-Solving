let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

function f(n) {
  let str = n + "";
  if (n.length ==1) {
    return true;
  } else {
    let diff = Number(str[1]) - Number(str[0]);

    for(let i=1; i < str.length -1; i++ ) {
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

for(let i =1; i <= n; i++) {
  if(f(i)) {
    result += 1;
  }
}

console.log(result);
