function solution(nums) {
    var answer = 0;
    const primes = []
       for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length- 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                primes.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    primes.forEach((item,idx) => isPrime(item) ? answer += 1 : null )
    return answer;
}

function isPrime(n) {
    let count = 0;
      for (let i = 2; i <= Math.sqrt(n); i++) {
            n % i === 0 ? count++ : null
        }
    return count > 0 ? false : true
    }
