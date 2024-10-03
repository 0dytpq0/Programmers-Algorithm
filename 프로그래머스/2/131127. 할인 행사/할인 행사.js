// 금액 지불 -> 10일 회원
// 회원 대상 매일 한 가지 제품 할인
// 할인 제품은 하루 한개 구매 가능


function solution(want, number, discount) {
    var answer = 0;
    
    for(let i = 0; i <= discount.length - 10; i++){
        const result = new Map()
        const arr = discount.slice(i,10+i)
           arr.forEach(product => {
            result.set(product, (result.get(product) || 0) + 1);
        });
        
    let isMatch = true;
        
    for (let j = 0; j < want.length; j++){
        const product = want[j]
        const count = number[j]
        
        if(!result.has(product) || result.get(product) !== count){
            
            isMatch = false
            break;
        }
    }
    
   if (isMatch) answer++;
        
    }
    return answer;
}