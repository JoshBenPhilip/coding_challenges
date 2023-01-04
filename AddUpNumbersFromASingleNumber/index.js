function addUp(num) {
  let workingNum = 0;
  for (let i = num; i > 0; i--) {
    workingNum += i;
  }
  return workingNum;
}

console.log(addUp(4));
