
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw


function twoSum(nums, targetSum) {
//given an unsorted array and a target sum
// find out the possible combination that can add up to the target sum
let newArr = [];
for(let i = 0; i < nums.length - 1; i++){
    for(let j = i + 1; j < nums.length; j++){
    if(nums[i] + nums[j] === targetSum){
        newArr.push(i);
        newArr.push(j);
        return newArr
    }
    }
}
return false
}
// good job! If you want to make it with only 1 loop, hint is...... try an object/dictionary
// but don't remove the code :p copy the function and call it twoSum2

console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))
//***************************** */


const nums4 = [1, 2, 1, 2, 3, 1]; //[1,1,1,2,2,3]
const k4 = 2;
const expected4 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [3, 2, 0, 2, 0, 0];//[0,0,0,2,2,3]
const k5 = 1;
const expected5 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 2, 1, 3];//[1, 1, 2, 2, 3, 3]
const k6 = 3;
const expected6 = [1, 2, 3];

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8
function kMostFrequent(nums, k) {
//given an unsorted array and k
// find the kth most frequent element
let newArr = []
let freqTable = {}
for(let i = 0; i < nums.length; i++){
    if(freqTable[nums[i]]){
    freqTable[nums[i]] += 1;
    } else {
    freqTable[nums[i]] = 1;
    }
}
while(newArr.length != k){
    let max;
    let maxVal = 0;
    for(key in freqTable){
    if(freqTable[key] > maxVal){
        max = key
        maxVal = freqTable[key]
    }
    }
    newArr.push(max);
    delete(freqTable[max])
}
return newArr
}

console.log(kMostFrequent(nums4, k4))
console.log(kMostFrequent(nums5, k5))
console.log(kMostFrequent(nums6, k6))




