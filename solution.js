function solution(D) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = Array(7).fill(null);

  // Step 1: Sum input values by weekday
  for (const dateStr in D) {
    const date = new Date(dateStr);
    const dayIdx = date.getUTCDay() === 0 ? 6 : date.getUTCDay() - 1;
    values[dayIdx] = (values[dayIdx] ?? 0) + D[dateStr];
  }

  // Step 2: Fill missing days (null) using mean of immediate prev & next, with wrap-around
  for (let i = 0; i < 7; i++) {
    if (values[i] === null) {
      // find previous non-null
      let prev = (i + 6) % 7;
      while (values[prev] === null) {
        prev = (prev + 6) % 7;
      }

      // find next non-null
      let next = (i + 1) % 7;
      while (values[next] === null) {
        next = (next + 1) % 7;
      }

      values[i] = (values[prev] + values[next]) / 2;
    }
  }

  // Step 3: Convert to object, replacing any residual null with 0 just in case
  const result = {};
  for (let i = 0; i < 7; i++) {
    result[daysOfWeek[i]] = values[i] ?? 0;
  }

  return result;
}

module.exports = solution;
