// 1. **Merge Intervals**

// Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

// **Example 1:**
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// **Constraints:**

// - `1 <= intervals.length <= 10000`
// - `intervals[i].length == 2`
// - `0 <= starti <= endi <= 10000`

//Solution--->
function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = current[0];
    const currentEnd = current[1];
    const [nextStart, nextEnd] = intervals[i];

    if (nextStart <= currentEnd) {
      current[1] = Math.max(currentEnd, nextEnd);
    } else {
      result.push(current);
      current = intervals[i];
    }
  }

  result.push(current);

  return result;
}

const input1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(input1)); 
// Output: [[1,6],[8,10],[15,18]]

const input2 = [
  [1, 4],
  [4, 5],
];
console.log(mergeIntervals(input2)); 
// Output: [[1,5]]
