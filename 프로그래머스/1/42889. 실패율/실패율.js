function solution(N, stages) {
    // Step 1: Initialize the arrays
    let playersAtStage = new Array(N + 1).fill(0); // To count players at each stage
    let failureRates = []; // To store failure rates of each stage

    // Step 2: Count the players at each stage
    stages.forEach(stage => {
        if (stage <= N) {
            playersAtStage[stage]++;
        }
    });

    // Step 3: Calculate failure rates for each stage
    let totalPlayers = stages.length;
    for (let i = 1; i <= N; i++) {
        if (totalPlayers > 0) {
            let failureRate = playersAtStage[i] / totalPlayers;
            failureRates.push({ stage: i, failureRate: failureRate });
            totalPlayers -= playersAtStage[i];
        } else {
            failureRates.push({ stage: i, failureRate: 0 });
        }
    }

    // Step 4: Sort the stages by failure rate in descending order
    failureRates.sort((a, b) => {
        if (b.failureRate === a.failureRate) {
            return a.stage - b.stage; // Ascending order for stage number if failure rates are equal
        }
        return b.failureRate - a.failureRate; // Descending order for failure rate
    });

    // Step 5: Extract the sorted stage numbers
    return failureRates.map(item => item.stage);
}