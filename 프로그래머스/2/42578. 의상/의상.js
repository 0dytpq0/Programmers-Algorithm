function solution(clothes) {
    const clothesMap = new Map();
    
    clothes.forEach(([name,type],idx) => clothesMap.set(type, (clothesMap.get(type) || 0) + 1))
    
    let combi = 1
    for(let count of clothesMap.values()) {
        combi *= count + 1
    }
    
    
    return combi-1;
}