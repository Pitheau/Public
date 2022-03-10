
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random = [-1, -5, 4, 10, 6, 22, 15]

function insertionSort(nums) {
  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the correct position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
for(let i = 1; i < nums.length; i++){
  let currentInd = nums[i];
  let x = i - 1
  while((x > - 1) && (currentInd < nums[x])){
      nums[x + 1] = nums[x];
      x--
  }
  nums[x+1] = currentInd
  }
  return nums
}
console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))
console.log(insertionSort(random))

const arr1 = [2,4,8,3]
const arr2 = [2,4,8,1]

// [ 2 , 4 , 3 ,8 ]
// [ 2,  3,  4, 8 ]

function insertionHelper(arr){
    // given an array with everything sorted except for the last element
  // insert the last element to the right position
  for(let i = arr.length -1; i >= 0 ; i--){
    let currentInd = arr[i];
    let x = i - 1
    while(currentInd < arr[x]){
        arr[x + 1] = arr[x];
        x--
    }
    arr[x+1] = currentInd
}
return arr
}
console.log(insertionHelper(arr1))
console.log(insertionHelper(arr2))