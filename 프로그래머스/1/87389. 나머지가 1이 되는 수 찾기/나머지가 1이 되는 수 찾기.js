function solution(n) {
    var answer = 0;
    let num = 2
    while(n){
        if(n % num == 1){
            answer = num
            break;
        }
        num++
    }
    
    return answer;
}