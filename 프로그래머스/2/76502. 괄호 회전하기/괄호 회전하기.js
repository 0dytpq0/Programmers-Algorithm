function solution(s) {
    let answer = 0;
    const arr = s.split('')
    const paris = {'}' : '{', ']' : '[', ')' : '(' }
    let stk = []
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j< arr.length; j++){
            if(stk.length > 0 && stk.includes(paris[arr[j]])){
                stk.pop()
            } else{
                stk.push(arr[j])
            }
        }
        if(stk.length === 0){
            answer++
        }
        stk = []
        arr.push(arr[0])
        arr.shift()
        
    }
    
    
    return answer;
}