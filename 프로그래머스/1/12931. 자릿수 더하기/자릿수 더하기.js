function solution(n)
{
    var answer = 0;
    return answer = (n+"").split("").reduce((acc,cur) => acc += Number(cur),0);
}