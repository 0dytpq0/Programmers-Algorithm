function solution(s) {
    let answer = s.split(' ').map((item,idx) => {
        return item.split('').map((word,idx) => {
            console.log(word)
            return idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
        }).join('')
    }) 
    console.log(answer)
    
    
    
    return answer.join(' ');
}