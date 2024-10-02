// k개
// 서로 다른 종류의 수를 최소화
// 

function solution(k, tangerine) {
    let kindCounts = 0
    let totalCounts = 0
    
    // 귤의 크기별 개수 세기
    const sizeCount = new Map();
    for (let size of tangerine) {
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1);
    }
    
    const sortedCounts = [...sizeCount.values()].sort((a,b) => b-a)
    
    for(let count of sortedCounts){
         totalCounts += count;
        kindCounts+=1;
        if(totalCounts >= k){
            break;
        }
    }
  
    return kindCounts
}