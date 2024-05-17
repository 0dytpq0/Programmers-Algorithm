function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i ++) {
        divisors = []
        console.log('i',i)
        for (let j = 1; j  <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                divisors.push((j))
            if(i / j!= i) divisors.push((i /j));
            }; 
        }
        divisors.push(i);
        const aa = new Set(divisors)
        aa.size % 2 === 0 ? answer += i : answer -= i
    }
    return answer;
}

