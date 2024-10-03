function solution(s) {
   const a = s.split(' ').sort((a,b) => a-b)
    const str = `${a[0]} ${a[a.length-1]}`
    return str;
}