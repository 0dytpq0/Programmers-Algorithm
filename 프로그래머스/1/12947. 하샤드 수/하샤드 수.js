function solution(x) {
    const divisor = x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
console.log(divisor); 
    isHashad = x % divisor === 0 
    return isHashad;
}