

function insertionSort(nums) {
  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the correct position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
}

console.log(insertionSort(numsRandomOrder))

const arr1 = [2,4,8,3]
const arr2 = [2,4,8,1]

// [ 2 , 4 , 3 ,8 ]
// [ 2,  3,  4, 8 ]

function insertionHelper(arr){
    // given an array with everything sorted except for the last element
  // insert the last element to the right position
}