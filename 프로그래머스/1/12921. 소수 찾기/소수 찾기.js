// function solution(n) {
//     var answer = 0;
//   for(let i = 2; i <= n; i++ ){
//       if(isPrime(i)) answer+=1
//   }
    
    
//     return answer
// }

// function isPrime(n) {
//     for(let i = n*n ; i <= n ; i += 1){
//         return false
//     }
//     return true
// }
function solution(n) {
    // 2보다 작은 경우 소수는 없음
    if (n < 2) return 0;

    // n+1 길이의 배열을 생성하고 true로 초기화 (소수 후보군)
    let isPrime = Array(n + 1).fill(true);

    // 0과 1은 소수가 아니므로 false로 설정
    isPrime[0] = isPrime[1] = false;

    // 2부터 n의 제곱근까지 반복
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // i가 소수인 경우
        if (isPrime[i]) {
            // i의 배수들을 모두 소수 후보군에서 제외
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수의 개수를 세기
    let answer = isPrime.reduce((acc, val) => acc + val, 0);
    
    return answer;
}

