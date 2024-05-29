function solution(answers) {
    var answer = [];

    const A = '12345'.split('')
    const B = '21232425'.split('')
    const C = '3311224455'.split('')
    
    const aResult = answers.filter((item,i) => item === Number(A[i % A.length])).length;
    const bResult = answers.filter((item,i) => item === Number(B[i % B.length])).length;
    const cResult = answers.filter((item,i) => item === Number(C[i % C.length])).length;
    const max = Math.max(aResult,bResult,cResult)
    
    if(aResult === max) answer.push(1)
    if(bResult === max) answer.push(2)
    if(cResult === max) answer.push(3)
    
    return answer;
}
