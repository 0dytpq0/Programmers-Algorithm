function solution(X, Y) {
  const counts = new Array(10);
  for (let i = 0; i < 10; i++) {
    const cntX = X.split(i).length - 1;
    const cntY = Y.split(i).length - 1;

    counts[i] = Math.min(cntX, cntY);
  }

  const resultString = Object.keys(counts)
    .filter((v) => counts[v] !== -1)
    .sort((a, b) => b - a)
    .map((v) => v.repeat(counts[v]))
    .join("");

  if (resultString.length === 0) {
    return "-1";
  } else if (resultString[0] == "0") {
    return "0";
  }
  return resultString;

  // 왜 위는 되고 아래는 안되지?
  // return String(resultString.length === 0 ? -1 : Number(resultString));
}