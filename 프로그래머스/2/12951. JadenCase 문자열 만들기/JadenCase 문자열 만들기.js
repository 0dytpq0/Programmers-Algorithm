function solution(s) {
    const arr = s.split(' ');
    const strings = arr.map((item) => {
        if (item.length === 0) return ''; // Check if the string is empty
        const totalString = item.slice(1).toLowerCase();
        const firstStr = item[0].toUpperCase();
        return firstStr + totalString;
    });
    
    return strings.join(' ');
}