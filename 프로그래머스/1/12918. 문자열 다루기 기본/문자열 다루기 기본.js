function solution(s) {
    var answer = false;
    const regex = /^[0-9]*$/;
    if (regex.test(s) && (s.length === 4 || s.length === 6)) answer = true 
    
    return answer;
}