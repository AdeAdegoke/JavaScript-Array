function divideArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Both arrays must have the same length for division.");
  }
  
  const resultArray = arr1.map((value, index) => {
    if (arr2[index] === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return value / arr2[index];
  });

  return resultArray.join(', ');
}

const Array1 = [15, 30, 45, 60];
const Array2 = [5, 6, 3, 10];
const resultString = divideArrays(Array1, Array2);
console.log(resultString);
