// 0~n 10n ~ 1,0,1,1
// 

function solution(n, t, m, p) {
    let answer = '';
    let currentNumber = 0;
    let sequence = ''
    
    while(sequence.length < m * t) {
        sequence += currentNumber.toString(n).toUpperCase();
        currentNumber++
    }
    
    for(let i = 0; i < t; i++){
        answer += sequence[(i*m) + (p-1)];
    }
    
    return answer;
}