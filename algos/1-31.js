/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {}

/*****************************************************************************/

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {}






function sumNumNums(nums) {
    if (nums.length < 2) return nums[0];
    num = nums[nums.length-1]
    numnums = nums.slice(0, nums.length-1)
      return num + sumNumNums(numnums);
  }
  function recursiveSigma(num) {
    if(num < 0) return 0;
    num = Math.floor(num)
    if(num == 1) return num;
    newNum = num-1
    return num += recursiveSigma(newNum)
  }