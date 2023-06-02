// Question 5**

// Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// **Example 1:**

// **Input:** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

// **Output:** 2

// **Explanation:**

// For arr1[0]=4 we have:

// |4-10|=6 > d=2

// |4-9|=5 > d=2

// |4-1|=3 > d=2

// |4-8|=4 > d=2

// For arr1[1]=5 we have:

// |5-10|=5 > d=2

// |5-9|=4 > d=2

// |5-1|=4 > d=2

// |5-8|=3 > d=2

// For arr1[2]=8 we have:

// **|8-10|=2 <= d=2**

// **|8-9|=1 <= d=2**

// |8-1|=7 > d=2

// **|8-8|=0 <= d=2**

//Solution--->

function calculateDistance(arr1, arr2, d) {
    arr2.sort((a, b) => a - b); // Sort arr2 in ascending order
  
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      const currentElement = arr1[i];
      let left = 0;
      let right = arr2.length - 1;
      let found = false;
  
      while (left <= right) {
        const middle = Math.floor((left + right) / 2);
  
        if (Math.abs(arr2[middle] - currentElement) <= d) {
          found = true;
          break;
        } else if (arr2[middle] < currentElement) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
  
      if (!found) {
        distance++;
      }
    }
  
    return distance;
  }
  const array1 = [4, 5, 8];
  const array2 = [10, 9, 1, 8];
  const threshold = 2;
  
  const result = calculateDistance(array1, array2, threshold);
  console.log(result); 
  // Output: 2
  