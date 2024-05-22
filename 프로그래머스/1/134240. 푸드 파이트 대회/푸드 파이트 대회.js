function solution(food) {
    var answer = '';
    // 칼로리 적은 순서 대로 나타내줘
    // 음식의 수는 2보다 작으면 못쓰고 짝수로만 배치됨 여야함
    food.map((item,idx) => {
        if(idx === 0 ) return;
        console.log(item)
        const halfFood = Math.floor(item / 2)
        answer += idx.toString().repeat(halfFood)
        if(idx === food.length -1) answer += '0' + answer.split('').reverse().join('')
    })
    
    
    console.log(answer)
    
    return answer;
}