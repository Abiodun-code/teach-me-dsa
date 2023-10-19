const factorial = (num) =>{
  let result = 1
  for (let index = 2; index <= num; index++) {
    result = result * index
  }
  return result
}

console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(5)) //120
