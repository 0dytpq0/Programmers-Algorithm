function solution(s) {
    var answer = s.split('').sort().reverse().join('')
    console.log(answer)
    return answer;
}