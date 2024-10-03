const getDays = (progresses, speeds) => {
    const days = []
    for(let i = 0; i < progresses.length; i++){
        days.push(Math.ceil((100 - progresses[i])/speeds[i]))
    } 
    return days
}

function solution(progresses, speeds) {
    var answer = [];
    const days = getDays(progresses, speeds)
    let max = days[0];
    let count = 0;
    days.forEach((fixed, idx, origin) => {
        if(fixed > max) {
            answer.push(count); 
            
            if(idx === days.length-1) return answer.push(1)
            
            count = 0
        }
        max = Math.max(max,fixed)
        if(fixed <= max) {
            count += 1
            if(idx === days.length-1)answer.push(count)
        }
    })
    
    console.log(days)
    return answer;
}