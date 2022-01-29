const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function() {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  solution(input);
  process.exit();
});

function solution(input) {
  let n = Number(input[0]);

  let names = [];
  for(let i=1; i<=n; i++) {
    names.push(input[i]);
  }

let increasing = true;
let decreasing = true;

for (let i = 0; i< n-1; i++) {
  if (names[i] <names[i+1]) {
    decreasing = false;
  } else if ( names[i] > names[i+1]){
    increasing = false;
  }
}

if(increasing) console.log("INCREASING");
else if(decreasing) console.log("DECREASING");
else console.log("NEITHER");
}
