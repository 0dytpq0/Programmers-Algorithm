function makeMultiSet(str) {
    const multiSet = []
    const lowerStr = str.toLowerCase();
    
    for(let i = 0 ; i < str.length-1; i++){
        const pair = lowerStr.slice(i,i+2)
        if(/^[a-z]{2}$/.test(pair)){
            multiSet.push(pair)
        }
        
    }
    return multiSet
}

function solution(str1, str2) {
    const multiSet1 = makeMultiSet(str1)
    const multiSet2 = makeMultiSet(str2)
    
    const map1 = new Map()
    const map2 = new Map()
    // 각 단어가 몇개있니? 겹치면 +1
    multiSet1.forEach((item) => {
        map1.set(item, (map1.get(item) || 0)+1)
    })
    multiSet2.forEach((item) => {
        map2.set(item, (map2.get(item) || 0)+1)
    })
    
    let intersection = 0;
    let union = 0;
    
    // 교집합, 합집합에 대해 key값 저장
    const allKeys = new Set([...map1.keys(), ...map2.keys()])
    
    // 모든 값에서 count1에 있어 count2에 있어 => 둘 중 작은 값 = 교집합+, 둘 중 큰값 = 합집합+ 
    // 모든 값에서 count1에 있어 count2에 없어 => 둘 중 작은값 = 교집합(0), 둘 중 큰값 = 합집합
    // 둘다 없어 => 0 , 0
    allKeys.forEach((key) => {
        const count1 = map1.get(key) || 0
        const count2 = map2.get(key) || 0
        intersection += Math.min(count1,count2)
        union += Math.max(count1, count2)
    })
    
    const result = union === 0 ? 1 : intersection / union;
   
    return Math.floor(result * 65536)
}