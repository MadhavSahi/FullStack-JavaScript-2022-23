// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

//Solution--->

function intervalsAttend(meetingIntervals) {
    meetingIntervals.sort((a, b) => a[0] - b[0]);//sort acc to first time

  for (let i = 1; i < meetingIntervals.length; i++) {
    if (meetingIntervals[i][0] < meetingIntervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}

const meetingIntervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(intervalsAttend(meetingIntervals));
