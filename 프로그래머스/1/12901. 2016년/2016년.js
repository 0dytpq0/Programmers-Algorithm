function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const month = a.toString().padStart(2,'0')
    const day = b.toString().padStart(2,'0')
    const date = new Date(`2016-${month}-${day}`)
    return days[date.getUTCDay()];
}