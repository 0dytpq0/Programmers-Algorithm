function solution(babbling) {
    let answer = 0;
    const canSpeak = ['aya','ye','woo','ma']
    
    babbling.forEach((babblingWord,idx) => {
        let curBabblingWord = babblingWord
        canSpeak.forEach((canSpeakWord) => {
            curBabblingWord.includes(canSpeakWord) ? curBabblingWord = curBabblingWord.replace(canSpeakWord,' ') : null
        })
        curBabblingWord.trim().length === 0 ? answer += 1 : null
    })
    
    return answer;
}