function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j]
            answer.includes(sum) ? null : answer.push(sum)
        }
    }
    console.log(answer)
    return answer.sort((a,b) => a - b);
}