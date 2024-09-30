

function solution(arr) {
    
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    arr.length <= 0 ? answer = [-1] : answer = arr
    //     arr.sort((a, b) => b - a);
    // arr.pop();
    return answer
}