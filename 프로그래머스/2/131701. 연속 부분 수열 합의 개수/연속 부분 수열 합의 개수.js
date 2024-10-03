// 

function solution(elements) {
    const sums = new Set()
    const circularArr = elements.concat(elements)
   
    for(let length = 1; length <= elements.length; length++){
       for(let start = 0; start < elements.length; start++){
           let sum = 0;
           for(let i = start; i < start + length; i++){
               sum += circularArr[i]
           }
           
           sums.add(sum)
       }
    }
    return sums.size;
}