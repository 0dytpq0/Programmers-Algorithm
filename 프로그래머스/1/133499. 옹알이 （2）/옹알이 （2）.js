function solution(babbling) {
    const pronounce = ['aya','ye','woo','ma']
    let count = 0;
    for(let i = 0; i< babbling.length; i++){
        let babble = babbling[i]
        
        for(let j =0; j<pronounce.length; j++){
            if(babble.includes(pronounce[j].repeat(2))) break;
            
            babble = babble.split(pronounce[j]).join(' ')
        }
        babble = babble.split(' ').join('')
        babble.length === 0 ? count++ : null
    }
    
    return count;
}