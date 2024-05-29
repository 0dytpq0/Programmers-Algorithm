function solution(number, limit, power) {
    const measureNumber = getMeasureNumber(number);
    const answer = measureNumber.reduce((acc, cur) => {
        return cur <= limit ? acc + cur : acc + power;
    }, 0);
    return answer;
}

function getMeasureNumber(number) {
    const result = [];

    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; // j is a divisor
                if (j !== i / j) {
                    count++; // i / j is also a divisor
                }
            }
        }
        result.push(count);
    }
    
    return result;
}