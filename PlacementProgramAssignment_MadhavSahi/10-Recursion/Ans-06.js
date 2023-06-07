// Question 6**

// The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

// **Example 1:**

// Input:
// N = 2
// Output:
// move disk 1 from rod 1 to rod 2
// move disk 2 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 3
// 3
// Explanation:For N=2 , steps will be
// as follows in the example and total
// 3 steps will be taken.

// Input:
// N = 3
// Output:
// move disk 1 from rod 1 to rod 3
// move disk 2 from rod 1 to rod 2
// move disk 1 from rod 3 to rod 2
// move disk 3 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 1
// move disk 2 from rod 2 to rod 3
// move disk 1 from rod 1 to rod 3
// 7
// Explanation:For N=3 , steps will be
// as follows in the example and total
// 7 steps will be taken.

//Solution--->

function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 0) {
    return 0;
  }

  const moves = towerOfHanoi(n - 1, source, auxiliary, destination);
  console.log(`move disk ${n} from rod ${source} to rod ${destination}`);
  return moves + 1 + towerOfHanoi(n - 1, auxiliary, destination, source);
}

const n = 3;
const moves = towerOfHanoi(n, "A", "C", "B");
console.log(moves);
// move disk 1 from rod 1 to rod 3
// move disk 2 from rod 1 to rod 2
// move disk 1 from rod 3 to rod 2
// move disk 3 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 1
// move disk 2 from rod 2 to rod 3
// move disk 1 from rod 1 to rod 3
