function solution(price, money, count) {
    var answer = -1;
    // 원래 이용료 = price
    // N번 째 이용 -> price * N
    // count번 타게되면 현재 자신이 가지고 있는 금액에서 얼마가 부족한가?
    let totalPrice = 0;
    for(let i =1; i<=count; i++){
        totalPrice += price * i
        console.log(price,i)
    }
    console.log(totalPrice)
    answer = money - totalPrice > 0 ? 0 : Math.abs(money - totalPrice) 

    return answer;
}