const palindrome = (x) =>{
  let n = parseInt(x)
    if (n === x) {
      return true
    }
  return false
}

console.log(palindrome(200))
console.log(palindrome(-20))