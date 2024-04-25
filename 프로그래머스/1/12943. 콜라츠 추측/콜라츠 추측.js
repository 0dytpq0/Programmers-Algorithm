function solution(num) {
  if (num === 1) return 0;

  let count = 0;
  console.log("first");
  while (num !== 1) {
    if (count >= 500) return -1;

    if (num % 2 === 0) {
      num /= 2;
      count += 1;
      continue;
    }
    if (num % 2 === 1) {
      num = num * 3 + 1;
      count += 1;
      continue;
    }
  }

  return count;
}