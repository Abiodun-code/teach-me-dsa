//Fibonacci sequence is a sequence in which each number is the sum of the two preceeding one's
const fibonacci = (n) => {
  let fib = [0,1]
  for (let index = 2; index < n; index++) {    
    fib[index] = fib[index - 1] + fib[index - 2]
  }
  return fib
}

console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]

// Recursive Fibonacci
const recursiveFibonacci = (num) =>{
  if (num < 2) {
    return num
  }
  const result = recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
  return result
}

console.log(recursiveFibonacci(0)); //0
console.log(recursiveFibonacci(1)); //1
console.log(recursiveFibonacci(6)); //8
