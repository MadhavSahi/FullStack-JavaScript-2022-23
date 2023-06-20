// Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

// **Example 1:**
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Solution---->
function calculateTrappedWater(height) {
  let totalWater = 0;
  const len = height.length;

  if (len === 0) {
    return totalWater;
  }

  const leftMax = new Array(len);
  const rightMax = new Array(len);

  leftMax[0] = height[0];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < len; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
}

const elevationMap1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(calculateTrappedWater(elevationMap1));
// Output: 6

const elevationMap2 = [4, 2, 0, 3, 2, 5];
console.log(calculateTrappedWater(elevationMap2));
// Output: 9
