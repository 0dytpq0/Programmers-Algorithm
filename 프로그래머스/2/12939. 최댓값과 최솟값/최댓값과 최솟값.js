function solution(s) {
    var answer = '';
   const a = s.split(' ').sort((a,b) => a-b)
    const str = `${a[0]} ${a[a.length-1]}`
    console.log(str)
    return str;
}