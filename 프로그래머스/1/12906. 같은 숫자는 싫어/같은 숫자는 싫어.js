function solution(arr)
{
    var answer =[];
    arr.map((item,idx) => {
        if(idx > 0){
        
            arr[idx -1] === item ? null : answer.push(item)
        } else {
            answer.push(item)
        }
    })

    return answer;
}