// n 편중 h번 이상 h편 즉 6번 이상은 6편이 있어야해 6 -> 6~남은 편수가 6개

function solution(citations) {
    const sorted = citations.sort((a,b) => b-a)
    let hIndex = 0;
    sorted.forEach((item,idx) => {
        if(item >= idx+1) hIndex = idx+1
    })
 
    return hIndex;
}