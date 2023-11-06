
const binarySearch = (num)=>{
  let array = [-5,2,4,6,10]
  let rightIndex = array.length - 1
  let leftIndex = 0
  while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(num === array[middleIndex]){
      return middleIndex
    }
    if(num < array[middleIndex]){
      rightIndex = middleIndex - 1
    }else{
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch(10)); //4
console.log(binarySearch(6)); //3
console.log(binarySearch(20)); //-1