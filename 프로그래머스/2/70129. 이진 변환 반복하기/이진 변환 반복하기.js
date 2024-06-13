function solution(s) {
    
    function binaryTransform(s, count, zeroCount) {
        if (s === "1") {
            return [count, zeroCount];
        }

        const deletedZeroString = s.replace(/0/g, '');
        
        const removedZerosNum = s.length - deletedZeroString.length;

        const newBinary = deletedZeroString.length.toString(2);

        return binaryTransform(newBinary, count + 1, zeroCount + removedZerosNum);
    }

    return binaryTransform(s, 0, 0);
}