const linearSearch = (num) =>{
  let array = [-5, 2, 10, 4, 6]
  for (let index = 0; index < array.length; index++) {
    if (array[index] === num) {
      return index
    }
  }
  return -1
}

console.log(linearSearch(10)); //2
console.log(linearSearch(6)); //4
console.log(linearSearch(20)); //-1