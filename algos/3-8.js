// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums) {
//given an unsorted array, sort the array using bubbleSort
// i.e. keep swapping the largest value and put it at the end
for(let i = 0; i < nums.length; i++){ //n
for(let j = 0; j < nums.length - i - 1; j++){ //n 
    if(nums[j+1] < nums[j]){
    [[nums[j+1],nums[j]] = [nums[j],nums[j+1]]]

    
    }
}
}
return nums;
}

function bubbleSort2(nums, result = []) {
let temp = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
        temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
    }
}
let tempArr = [nums.pop()];
if (result.length === 0) {
    result = tempArr;
} else {
    result = tempArr.concat(result);
}
return nums.length === 0 ? result : bubbleSort2(nums, result);
}

console.log(bubbleSort(numsRandomOrder));


