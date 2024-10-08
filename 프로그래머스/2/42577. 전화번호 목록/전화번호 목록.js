function solution(phone_book) {
    var answer = true;
    const phoneMap = phone_book.reduce((map,cur) => map.set(cur,true) ,new Map())
    
    for(let phone of phone_book){
        for(let i = 1; i < phone.length; i++){
            if(phoneMap.has(phone.slice(0,i))) answer =false
        }
    }
    
    return answer;
}