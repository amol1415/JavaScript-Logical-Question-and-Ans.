// // // // // let ary = [1, 2, 3, 4, 5, 6, 9, 10];
// // // // // let maxNum = Math.max(...ary);
// // // // // let minNum = Math.min(...ary);
// // // // // missingNum = [];
// // // // // for (let i = minNum; i < maxNum; i++) {
// // // // //     if (ary.indexOf(i) < 0) {
// // // // //         missingNum.push(i);
// // // // //     }
// // // // // }
// // // // // console.log(missingNum);

// // // // // let string = "ABC_123_PQR_456_XYZ_789";
// // // // // let ary = string.split("_").filter((x) => !isNaN(x)).join("").split("")
// // // // //     .reduce((a, b) => a + parseInt(b), 0);
// // // // // console.log(ary);

// // // // // let ary = ["ABC", 123, "PQR", 456, "XYZ", 789];
// // // // // let string = ary.join("").split("").filter((a) => !isNaN(a)).reduce((a, b) => a + parseInt(b), 0);

// // // // // console.log(string);


// // // // // ary = ["ABC", 123, "PQR", 456, "XYZ", 789]
// // // // // let result = ary.join("");
// // // // // console.log(result);


// // // // // ary = ["ABC", 123, "PQR", 456, "XYZ", 789];
// // // // // let string = ary.join("_");
// // // // // console.log(string);

// // // // string = "ABC_123_PQR_456_XYZ_789";

// // // // // ["ABC", 123], ["PQR", 456], and ["XYZ", 789].like wise o/p want
// // // // let ary = string.split("_");
// // // // console.log(ary);
// // // // [a, b, c, d, e, f] = ['ABC', '123', 'PQR', '456', 'XYZ', '789'];


// // // // let num1 = parseInt(b, 10);
// // // // console.log(num1);

// // // // let num2 = parseInt(d, 10);
// // // // console.log(num2);
// // // // let num3 = parseInt(f, 10);
// // // // console.log(num3);

// // // // let pair1 = [a, num1];
// // // // console.log(pair1);

// // // // let pair2 = [c, num2];
// // // // console.log(pair2);

// // // // let pair3 = [e, num3];
// // // // console.log(pair3);

// // // // to move all negative element at one side.
// // // // let ary = [1, 2, 3, -4, 10, -11, 45, 67, -77];
// // // // let ary1 = ary.filter((x) => x > 0);
// // // // console.log(ary1);

// // // // let ary2 = ary.filter((x) => x < 0);
// // // // console.log(ary2);

// // // // let result = ary1.concat(ary2);
// // // // console.log(result);


// // // // let arr = [1, 2, 3, 4];
// // // // let ary = arr.length; // Store the original length
// // // // console.log(arr.length = 0); // Set the length to 0 (empty the array)
// // // // console.log(arr); // Output the empty array
// // // // console.log(ary); // Output the original length


// // // // how to acces first and last element of an ary without changing original array?
// // // // if we use pop and shift method then change original array 
// // // // let arr = [1, 2, 3, 4];
// // // // let firstElement = arr[0]; // 1
// // // // let lastElement = arr[arr.length - 1]; // 4
// // // // console.log(firstElement);
// // // // console.log(lastElement);
// // // // console.log(arr);

// // // // how do u loop through on array?
// // // let arr1 = [1, 2, 3, 4];

// // // for (i = 0; i < arr1.length; i++) {
// // //     // console.log(arr1[i]);
// // // }


// // // let x = arr1.forEach((element) => console.log(element))

// // // // how to check two array equal or not?


// // // function toCheckequalArray(ary1, ary2) {

// // //     return JSON.stringify(ary1) === JSON.stringify(ary2)


// // // }
// // // let array1 = ['a', 'b', 'c'];
// // // let array2 = ['a', 'b', 'c'];
// // // console.log(toCheckequalArray(array1, array2));

// // // // JavaScript Program to Swap First and Last Elements in an Array 
// // let arr = [10, 20, 30, 40, 50];
// // // let temp = arr[0];
// // // arr[0] = arr[arr.length - 1];
// // // arr[arr.length - 1] = temp;
// // // console.log(arr);

// // // without using third variable

// // // [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

// // // console.log(arr);
// // // how to clone array?
// // // const originalArray = [1, 2, 3];
// // // const clonedArray = originalArray;
// // // console.log(clonedArray);

// // // to find prime number.
// // let number = 6;
// // // prompt("Please enter number");
// // if (number == 1) {
// //     console.log(`${number} is not prime neither composite`);
// // } else if (number < 1) {
// //     console.log(`prime number of ${number} is not possible`);
// // } else {
// //     for (i = 2; i < number; i++) {
// //         if (number % i == 0) {
// //             var result = `${number} is not prime number`;
// //             break;
// //         } else {
// //             var result = `${number} is prime number`;

// //         }
// //     }
// //     console.log(result);
// // }

// //prime number
// function isPrime(number) {
//     // Handle cases where the number is less than 2 (not a prime number)
//     if (number < 2) {
//         return false;
//     }

//     // Check for divisibility by numbers from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             // If the number is divisible by any other number, it's not prime
//             return false;
//         }
//     }

//     // If no divisor is found, the number is prime
//     return true;
// }
// console.log(
//     isPrime(13));

function isPrime(number) {
    if (number < 2) {
        return console.log(`${number} is not prime number`);
    }

    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return console.log(`${number} is not prime number`);

        }
    }

    return console.log(`${number} is prime number`);

}
isPrime(-1);



