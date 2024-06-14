function solution(n) {
    const countOneOfN = n.toString(2).replace(/0/g, '').length
    var answer = 0;
    while(n) {
    n++
    if(n.toString(2).replace(/0/g,'').length === countOneOfN) {
        answer = n
        break;
    }
    }
    
    
    return answer;
}