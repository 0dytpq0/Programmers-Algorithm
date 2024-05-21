function solution(s) {
    const isExist = {}
    const answer =  s.split('').map((item, idx) => {
        let result = isExist[item] !== undefined  ? idx - isExist[item] : -1
        isExist[item] = idx
        return result
    
    })
   
    
    return answer
}

// function solution(s) {
//     const hash={};

//     return [...s].map((v,i)=>{
//         let result = hash[v] !== undefined ? i - hash[v] : -1;
//         hash[v] = i;
//         return result;
//     });
// }