
//EXERCICIO-1

// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
  
console.log(removeItem([1, 2, 3, 4], 2));


  //EXERCICIO-2
  
  // myFizzBuzz.js
  
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;

}
  console.log(myFizzBuzz(15));
  
  module.exports = removeItem, myFizzBuzz;
