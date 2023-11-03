//The factrial of an non-negative intergers denoted by "n" is the product of all positive interger from 1 to n
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

//Recusive Factorial of a number
const recusiveFactorial = (num)=>{
  if (num === 0) {
    return 1
  }
  const result =num * recusiveFactorial(num-1)
  return result
}

console.log(recusiveFactorial(0)) //1
console.log(recusiveFactorial(1)) //1
console.log(recusiveFactorial(5)) //120
