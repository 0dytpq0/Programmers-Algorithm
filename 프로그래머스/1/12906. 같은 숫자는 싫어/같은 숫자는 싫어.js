function solution(arr)
{
    var answer =arr.filter((item, idx) => item !== arr[idx+1])

    return answer;
}