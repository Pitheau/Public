
function partition(nums, left=0, right=nums.length-1){
    //Step 1: choose any number from the arr as the pivot
    //Step 2: move the nums smaller than the pivot on the left
    // and nums greats than pivot on the right
    //Step 3: return the pivot index
  }
  
  // example for nums1: (if middle idx is picked)
  // pivot = 8, pivot index = 4 
  // expected arr after partition:
  // [3,2,7,   8,   10, 11,14]
  // numbers on the left/right do not need to be in order
  // 3,2,7 are smaller than 8. 10, 11, 14 are larger than 8. 
  // return: index of the pivot: 3
const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];


function quickSort(nums = [], left = 0, right = nums.length - 1){

}
