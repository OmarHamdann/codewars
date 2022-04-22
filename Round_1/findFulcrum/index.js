//javascript code

let findFulcrum = (arr) => {
  // if there is only one element in the array
  if (arr.length === 1) {
    return arr[0];
  }

  for (let index = 1; index < arr.length; index++) {
    //sum left
    let leftSum = 0;
    for (let j = index - 1; j >= 0; j--) {
      leftSum += arr[j];
    }

    //sum right
    let rightSum = 0;
    for (let k = index + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return arr[index];
    }
  }

  return "No result";
};

console.log(findFulcrum([4, -3, 5, 10, -9, 0])); //5
console.log(findFulcrum([9, -6, 14, 11, -8])); //14
console.log(findFulcrum([9])); //9
console.log(findFulcrum([1, 2, 3, 4, 5])); //No result
