// 1-masala
function remove(arr, count) {
    if (count >= arr.length) {
        return [];
    }
    arr.splice(0, count);
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
let count = 3;
// let result = remove(myArray, count);
document.writeln(remove(myArray, count));



// 2-masala
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
//   let array1 = [1, 2, 3];
//   let array2 = [4, 5, 6];
//   let mergedArray = mergeArrays(array1, array2);
//   document.writeln(mergedArray);


//   3-masala
// function sum(arr, start, end) {
//     if (start < 0 || start >= arr.length || end < 0 || end >= arr.length) {
//         return "Noto'g'ri indekslar kiritdingiz!";
//     }
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5];
// let startIndex = 1;
// let endIndex = 3;
// document.writeln(sum(arr, startIndex, endIndex));


//  4-masala
// function reverseArray(arr) {
//     let newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArray.push(arr[i]);
//     }
//     return newArray;
//   }
//   let myArray = [1, 2, 3, 4, 5];
//   let reversedArray = reverseArray(myArray);
//   console.log(reversedArray);


// Sezar shifrlash algoritmi
// function encryptMessage(message, shift) {
//     let encryptedMessage = '';
//     for (let i = 0; i < message.length; i++) {
//       let char = message[i];
//       if (char >= 'a' && char <= 'z') {
//         let code = char.charCodeAt(0) - 'a'.charCodeAt(0);
//         code = (code + shift) % 26;
//         char = String.fromCharCode('a'.charCodeAt(0) + code);
//       } else if (char >= 'A' && char <= 'Z') {
//         let code = char.charCodeAt(0) - 'A'.charCodeAt(0);
//         code = (code + shift) % 26;
//         char = String.fromCharCode('A'.charCodeAt(0) + code);
//       }
//       encryptedMessage += char;
//     }
//     return encryptedMessage;
//   }
//   let message = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let shift = 3;
//   let encrypted = encryptMessage(message, shift);
//   document.writeln(encrypted);



// Nollar soni
// function countZerosInFactorial(n, m) {
//   if (n < m || n < 0 || m < 0) {
//     return "Noto'g'ri sonlar kiritdingiz!";
//   }
//   function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
//   const nFactorial = factorial(n);
//   const mFactorial = factorial(m);
//   const multiplication = nFactorial * mFactorial;
//   let countZeros = 0;
//   while (multiplication % 10 === 0) {
//     countZeros++;
//     multiplication = Math.floor(multiplication / 10);
//   }
//   return countZeros;
// }
// let n = 10;
// let m = 5;
// let result = countZerosInFactorial(n, m);
// document.writeln(result);
