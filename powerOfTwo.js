const powerTwo = (num) =>{
  for (let index = 2; index < num; index++) {
    if (num / index !== 0) {
      return false
    }
  }
  return true
}

console.log(powerTwo(1)) //true
console.log(powerTwo(2)); //true
console.log(powerTwo(3)); //false