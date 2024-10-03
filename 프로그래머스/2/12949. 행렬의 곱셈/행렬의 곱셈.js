// 행 갯수 = 열 갯수
// 행 x 열 = 행
// arr1[x][i] * arr2[i][y] = answer[x][y]
function solution(arr1, arr2) {
    var answer = [];
    console.log(arr1[0][0] + arr2[0][0])
    for(let i = 0; i < arr1.length; i++){
        const result = []
        for(let j =0; j<arr2[0].length; j++){
            let sum = 0;        
            // sum += arr1[i][0] * arr2[0][j]
            for(let k = 0; k < arr1[0].length; k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            result.push(sum)
        }
        answer.push(result)
    
    }
    return answer;
}