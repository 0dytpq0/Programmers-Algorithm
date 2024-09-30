// x 는 y와 같거나 커야된다.
// x = (brown + yellow) / y
// yellowX = x-2
// yellowY = y-2
// yellow = x-2 * y-2
// y를 가정하여 값을 구하자.

function solution(brown, yellow) {
    for(let y = 3; y <= (brown + yellow)/y; y++){
        const x = (brown+yellow) / y
        if((x-2) * (y-2) === yellow){
            return [x, y]
        }
    }
}