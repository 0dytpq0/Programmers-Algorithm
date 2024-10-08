
function solution(priorities, location) {
    const queue = priorities.map((priority, idx) =>  {return {priority, idx}})
    let count = 0;
    
    while(queue.length > 0){
        const current = queue.shift();
        
        if(queue.some((process) => process.priority > current.priority)){
            queue.push(current)
        } else {
            count++
            if(current.idx === location){
                return count
            }
        }
    }
    
    return -1;
}