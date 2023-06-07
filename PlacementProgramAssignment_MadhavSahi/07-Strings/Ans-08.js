// Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// ![Screenshot 2023-05-29 010117.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/012b0a97-4e4b-49b6-bc95-0531fc712978/Screenshot_2023-05-29_010117.png)

// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

//Solution--->

function isStraightLine(coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if ((x1 - x0) * (y - y1) !== (y1 - y0) * (x - x1)) {
      return false;
    }
  }

  return true;
}

console.log(
  isStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); // true
