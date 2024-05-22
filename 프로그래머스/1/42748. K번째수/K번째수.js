function solution(array, commands) {
    var answer = []
    commands.map((item) => {
        const slicedArr = array.slice(item[0]-1, item[1]).sort((a,b) => a-b);
        answer.push(slicedArr[item[2]-1])
        
        // annswer = slicedArr[item[2]-1]
        console.log(slicedArr,answer)
    })
    return answer;
}