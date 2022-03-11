function merge(arr1, arr2){
  let newArr = [];
  let runner1 = 0;
  let runner2 = 0;

  while(runner1 < arr1.length && runner2<arr2.length){
    if(arr1[runner1] < arr2[runner2]){
      newArr.push(arr1[runner1]);
      runner1 = runner1 + 1
    }else{
      newArr.push(arr2[runner2]);
      runner2 = runner2 + 1
    }
  }
  while(runner1< arr1.length){
    newArr.push(arr1[runner1]);
    runner1 = runner1 + 1
  }
  while(runner2 < arr2.length){
    newArr.push(arr2[runner2]);
    runner2 = runner2 + 1
  }
  
  return newArr
}
