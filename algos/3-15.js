
function orderedIntersection(sortedA, sortedB) {
  //given 2 sorted array in different length, find the nums that are intersect and return the array 
  //****  nums that appeared in both array.
  let i = 0
  let j = 0
  let result =[]
  while(i < sortedA.length){
    if(sortedA[i] < sortedB[j]) {
      i++
    } else if (sortedA[i] > sortedB[j]) {
      j++
    } else if (sortedA[i] === sortedB[j]) {
      result.push(sortedA[i])
      i++
      j++
    }
    return result
}
console.log(orderedIntersection(NumsA1, NumsB1))
// if they intersect, after you push it, do you need to move i and j? yes
function orderedMultisetUnion(sortedA, sortedB) {
  //given 2 sorted array in different length, find the union of both set and return the array 
  //**** all nums that appeared in either array.

}
