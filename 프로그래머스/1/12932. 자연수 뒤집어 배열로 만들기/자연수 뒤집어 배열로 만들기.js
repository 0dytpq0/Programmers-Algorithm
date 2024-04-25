function solution(n) {
    let arr = []
    n = n+""
    let i = 0
    for (let i = 0; i<n.length; i++){
        arr.push(Number(n[i]));
    }
    return arr.reverse();
}