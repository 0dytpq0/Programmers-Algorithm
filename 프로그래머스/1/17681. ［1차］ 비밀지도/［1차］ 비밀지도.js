function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        let arr1Desc = arr1[i].toString(2)
        let arr2Desc = arr2[i].toString(2)
        if (n > arr2Desc.length || n > arr1Desc.length) {
            arr2Desc = arr2Desc.padStart(n,0)
           arr1Desc = arr1Desc.padStart(n,0)
        } 
        
        let totalString = [...arr1Desc].map((item, idx) => {
            return item !== '0' || arr2Desc[idx] !=='0' ? '#' : ' ';
            }).join('');
        console.log(arr1Desc,arr2Desc,totalString)
       
        answer.push(totalString)
        
    }
    return answer;
}