
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

  module.exports = removeItem;