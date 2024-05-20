function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc,cur,idx) => signs[idx] === true ? acc += cur : acc += -cur,0);
    
    
    return answer;
}