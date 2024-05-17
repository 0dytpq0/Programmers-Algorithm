
function solution (n, m) {
    let num1 = n
    let num2 = m
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    const gcd = num1
    const lcm = (n*m) / gcd
    console.log(lcm,gcd)
    return [gcd,lcm];
}