//
const isPrime = (num) =>{
  if (num < 2) {
    return false
  }
  for (let index = 2; index <  num; index++) {
    if(num % index === 0){
      return false 
    }
  }
  return true
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false
