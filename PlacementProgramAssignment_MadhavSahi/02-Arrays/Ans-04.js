// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

//Solution--->

function PlantFLowers(flowerbed, n) {
  let count = 0;
  let x = 0;

  while (x < flowerbed.length) {
    if (
      flowerbed[x] === 0 && (x === 0 || flowerbed[x - 1] === 0) && (x === flowerbed.length - 1 || 
      flowerbed[x + 1] === 0)
    ) {
      flowerbed[x] = 1;
      count++;
    }
    if (count >= n) {
      return true;
    }
    x=x+1;
  }
  return false;
}
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const answer = PlantFLowers(flowerbed, n);
console.log(answer); 
// Output: true
