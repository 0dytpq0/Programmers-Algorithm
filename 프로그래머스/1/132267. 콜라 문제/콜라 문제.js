const exchangeCoke = (needCoke, exchangeCoke, myEmptyCoke) => {
    const exchangedCoke = Math.floor(myEmptyCoke / needCoke) * exchangeCoke;
    const leftoverCoke = myEmptyCoke % needCoke + exchangedCoke;
    return [exchangedCoke, leftoverCoke];
}

function solution(a, b, n) {
    let answer = 0;
    let currentEmptyCoke = n;

    while (currentEmptyCoke >= a) {
        const [exchangedCoke, leftoverCoke] = exchangeCoke(a, b, currentEmptyCoke);
        answer += exchangedCoke;
        currentEmptyCoke = leftoverCoke;
    }

    return answer;
}
