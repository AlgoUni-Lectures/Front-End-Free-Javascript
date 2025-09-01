// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივში ყველა ლუწი რიცხვის ჯამი.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumEvenNumbers(arr));

// 2. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

// const arr = [5, 1, 3, 2, 4];
// arr.sort((a, b) => a - b);
// console.log(arr);

// 3. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// const arr = [5, 4, 6, 0, 7, 1];

// const highestNumber = (arr) => {
//   let max = arr[0];
//   for (let number of arr) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// };

// console.log(highestNumber(arr));

// 4. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// const arr = [1, 2, 3, 4, 5];

// function removeElement(arr, element) {
//   //   const index = arr.indexOf(element);
//   //   arr.splice(index, 1);
//   //   return arr;

//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== element) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeElement(arr, 3));

// 5. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// function commonElements(arr1, arr2, arr3) {
//   const common = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
//       common.push(arr1[i]);
//     }
//   }
//   return common;
// }

// console.log(commonElements([1, 2, 3, 4, 5], [4, 5, 6, 7], [5, 6, 7, 8]));
