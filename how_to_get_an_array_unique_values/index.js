function getNewArrayWithUniqueValues(array) {
  let uniqueValueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueValueArray.includes(array[i])) {
      uniqueValueArray.push(array[i]);
    }
  }
  return uniqueValueArray;
}

console.log(getNewArrayWithUniqueValues([1, 2, 2, 2, 3, 3, 4, 5, 6]));
