function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        let arr1Desc = arr1[i].toString(2).padStart(n,0)
        let arr2Desc = arr2[i].toString(2).padStart(n,0)
        
        let totalString = [...arr1Desc].map((item, idx) => {
            return item !== '0' || arr2Desc[idx] !=='0' ? '#' : ' ';
            }).join('');
        answer.push(totalString)
        
    }
    return answer;
}