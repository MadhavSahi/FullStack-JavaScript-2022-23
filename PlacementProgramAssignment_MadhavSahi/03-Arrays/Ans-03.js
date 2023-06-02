// Question 3
// A permutation of an array of integers is an arrangement of its members into a
// sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater
// permutation of its integer. More formally, if all the permutations of the array are
// sorted in one container according to their lexicographical order, then the next
// permutation of that array is the permutation that follows it in the sorted container.

// If such an arrangement is not possible, the array must be rearranged as the
// lowest possible order (i.e., sorted in ascending order).

// ● For example, the next permutation of arr = [1,2,3] is [1,3,2].
// ● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// ● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
// have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// **Example 1:**
// Input: nums = [1,2,3]
// Output: [1,3,2]

//Solution-->

function nextpermutation(array1) {
    let index1 = array1.length - 2;
    while (index1 >= 0 && array1[index1] >= array1[index1 + 1]) {
        index1--;
    }

    if (index1 >= 0) {
        let index2 = array1.length - 1;
        while (index2 >= 0 && array1[index2] <= array1[index1]) {
            index2--;
        }
        const temp = array1[index1];
        array1[index1] = array1[index2];
        array1[index2] = temp;
    }

    let j = array1.length - 1;
    let i = index1 + 1;
    while (i < j) {
        const temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
        j--;
        i++;
    }
}

const numbers = [1, 2, 3];
nextpermutation(numbers);
console.log(numbers);

