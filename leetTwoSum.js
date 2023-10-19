const twoSum = (nums) => {
  let target = [0,1]
  for (let index = 2; index < nums; index++) {
    for (let i = 0; i < index; i++) {
      target[index] = target[index - 1] + target[index - 2]
      
    }
  }
  return target
}

console.log(twoSum(6))
console.log(twoSum(9))
console.log(twoSum(6))