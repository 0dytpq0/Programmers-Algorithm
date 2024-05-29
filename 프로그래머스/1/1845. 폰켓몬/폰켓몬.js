function solution(nums) {
    let num = Math.floor(nums.length / 2)
    const poketmons = [...new Set(nums)]
    const answer = poketmons.length > num  ? num :poketmons.length 
    return answer
}