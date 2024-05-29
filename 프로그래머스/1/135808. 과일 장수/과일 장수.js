function solution(k, m, score) {
    // 사과 상태에 따라 1~k점으로 분류됨
    // 한 상자에 사과를 m개씩 담아 포장
    // 상자에 담긴 사과 중 가장 낮은 점수가 p점인 경우, 사과 한 상자의 가격은 p*m
    var answer = 0;
    
    const boxAmount = Math.floor(score.length / m)
    const sortedApple = score.sort((a,b) => b-a)
    for (let i =0; i < boxAmount; i++){
        const curBox = sortedApple.slice(i*m, i*m+m)
        const result = curBox[m-1] * m
        answer += result
    }
    
    return answer;
}