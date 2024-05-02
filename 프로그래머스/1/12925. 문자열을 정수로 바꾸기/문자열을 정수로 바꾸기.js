function solution(s) {
    let number = 0
    if(s[0] === '-'){
        number = Number(s.slice(1)) * -1
    } else if (s[0] === '+'){
    number = Number(s.slice(1))
    
    }else{
        number = Number(s)
    }
    
    console.log(number)
    
    return number;
}