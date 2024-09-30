// function remove(str) {
//     if (str.includes('()')) {
//         return remove(str.replace(/\(\)/g, ''));
//     } else {
//         return str;
//     }
// }


// function solution(s){
//     var answer = true;
//     const str = remove(s)
//     str.length === 0 ? answer = true : answer = false

//     return answer;
// }



function solution(s){
    const stack = []
     if(s[0] === ')'){
            return false
        }
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(s[i])
        } else if(s[i] === ')'){
            if(stack.length === 0){
                return false
            }
            stack.pop()
        }
    }
        return stack.length === 0;
}
