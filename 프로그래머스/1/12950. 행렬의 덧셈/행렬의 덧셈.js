function solution(arr1, arr2) {
    let answer = [];
    const instantArr = []
    arr1.map((item, firstIdx) => {
        const sumArr = []
        item.map((el, secondIdx) => {
            sumArr.push(el + arr2[firstIdx][secondIdx])
        })
        answer.push(sumArr)
    })
    
    return answer;
}