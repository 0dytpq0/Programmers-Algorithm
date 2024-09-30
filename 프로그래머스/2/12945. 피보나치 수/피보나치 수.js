// 피보나치 수 0과 1만 알면 되므로 배열에 할당
// 순차적으로 진행 되기 때문에 2~n의 수는 계속 배열에 넣어주면서 진행

function solution(n) {
    let fib = [0, 1];
    for(let i=2; i<=n; i++) {
        fib[i] = (fib[i-1]+fib[i-2])%1234567;
    }
    
    return fib[n];
}