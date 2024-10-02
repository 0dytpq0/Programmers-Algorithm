// jump = k, 순간이동 = 현재까지 온 거리 x 2
// 순간이동 = 건전지 x 점프 = 건전지 - k
// 슈트 구매자는 N만큼 떨어져 있는 장소로 갈때 최소한의 건전지 사용량으로 가는 법은?

function solution(n)
{
    let ans = 0;
    
    while (n !== 0) {
        if (n % 2 === 1) {
            ans++;
            n -= 1;
        } else {
            n /= 2;
        }
    }

    return ans;
}