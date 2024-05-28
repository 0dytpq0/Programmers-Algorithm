function solution(k, score) {
    let answer = []
    let honor = []
    score.forEach((item,idx) => {
        honor.push(item)
        idx < k -1 ? answer.push(honor.sort((a,b) => b - a)[idx]) : answer.push(honor.sort((a,b) => b - a)[k-1])
        
    })
    console.log(answer)
    return answer
}