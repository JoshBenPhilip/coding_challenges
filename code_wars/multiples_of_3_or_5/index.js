// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 10));

// function even_or_odd(number) {
//   let evenOrOdd = 0;
//   if (number / 2 == Math.floor(number / 2)) {
//     let evenOrOdd = "Even";
//   } else {
//     let evenOrOdd = "Odd";
//   }
//   return evenOrOdd;
// }

// console.log(even_or_odd(3));

// function testNum(a) {
//   let result;
//   if (a > 0) {
//     result = "positive";
//   } else {
//     result = "NOT positive";
//   }
//   return result;
// }

// console.log(testNum(-5));
// // expected output: "NOT positive"

const multiples = (multipleOfThisNum, belowThisNum) => {
  const numOfMultiplesContained = Math.floor(belowThisNum / multipleOfThisNum);
  let arrOfMultiples = [];
  for (let i = 1; i <= numOfMultiplesContained; i++) {
    let val = multipleOfThisNum * i;
    arrOfMultiples.push(val);
  }

  return arrOfMultiples;
};

// console.log(multiples(3, 15));

const array1 = multiples(3, 15);
const array2 = multiples(5, 15);

console.log(array1.forEach{function funct(element){if array2.includes(element)}});

// function solution(number) {
//   const belowThisNum = number;
//   const multiples = (multipleOfThisNum, belowThisNum) => {
//     const numOfMultiplesContained = Math.floor(
//       belowThisNum / multipleOfThisNum
//     );
//     let arrOfMultiples = [];
//     for (let i = 0; i <= numOfMultiplesContained; i++) {
//       let val = multipleOfThisNum * i;
//       arrOfMultiples.push(i);
//     }

//     return arrOfMultiples;
//   };

//   const array1 = multiples(3, belowThisNum);
//   const array2 = multiples(5, belowThisNum);

// const array3 = array1 + array2 - array1.includes(array2)

// function numsToDeleteExtraOf (arrayA, arrayB){const NumsToDeleteExtraOf = []
//   function loop (arrayA, arrayB) {for (let i=0; i< arrayA.length; i++) { for ( let j=0; j<arrayB.length; j++){ if (i == j) { numsToDeleteExtraOf.push(i)}}
// }

// const array3 = array1 + array2 -
// }
