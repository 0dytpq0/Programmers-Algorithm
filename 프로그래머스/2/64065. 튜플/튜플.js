// 중복 x 튜플 -> {} 

function solution(s) {
    var answer = [];
    const arr = s.replace('{{','').replace('}}','').split('},{').sort((a,b) => a.length-b.length)
    arr.forEach((fixed) => {
        const numbers = fixed.split(',')
        numbers.forEach((number) => {
            if(!answer.includes(Number(number))) answer.push(Number(number))
        })
    })  
    return answer;
}