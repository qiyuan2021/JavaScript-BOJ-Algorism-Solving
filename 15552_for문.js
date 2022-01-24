let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);

// 테스트 케이스의 개수가 최대 1,000,000가 나올 수 있는 상황입니다.
// 문제에서는 하나씩 출력해도 된다고 하지만 js는 하나씩 출력을 하면 필히 시간 초과라는 결과를 얻었습니다.

// 그래서 하나의 문자열에 결과값과 개행 문자를 넣어 마지막에 출력을 했습니다.

// for 문을 사용해 1부터 시작해 split 메서드로 나눈 후 결과값을 얻고 하나의 문자열에 넣어 출력을 해줍니다.
