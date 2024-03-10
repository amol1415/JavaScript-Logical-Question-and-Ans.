// // 1.To find missing numbers from Array.

// let ary = [1, 2, 3, 4, 5, 6, 9];
// let missNum = [];
// let maxNum = Math.max(...ary)
// let minNum = Math.min(...ary)
// for (let i = minNum; i < maxNum; i++) {
//     if (ary.indexOf(i) < 0) {
//         missNum.push(i);
//     };
// console.log(ary.indexOf(i));
// }
// console.log(missNum);

// extra example 
// let ary1 = [1, 2, 3, 4, 5, 6,7,8,11];
// let missNum = [];
// let maxNum = Math.max(...ary1)
// let minNum = Math.min(...ary1)
// for (let i = minNum; i < maxNum; i++) {
//     if (ary1.indexOf(i) < 0) {
//         missNum.push(i);
//     };
// console.log(ary1.indexOf(i));
// }
// console.log(missNum);



// //2. how to reverse string
// let str = "Amol";
// let reverseStr = "";
// length = str.length;
// // console.log(length);
// for (let i = length - 1; i >= 0; i--) {
//     reverseStr += str[i];


// }
// // console.log(reverseStr);
// // console.log(str.split("").reverse().join(""));

// //.3 how to array merge and sort
// let ary1 = [12, 1, 34, 66];
// let ary2 = [3, 7, 9, 23, 77];
// let ary3 = ary1.concat(ary2);
// // console.log(ary3.sort((a, b) => a - b));

// //.4 how to compaire two array are same or not.
// // let ary4 = [2, 9, 6, 8, 4];
// // let ary5 = [4, 8, 6, 9, 2];
// // let a = ary4.sort((a, b) => a - b).join("");
// // console.log(a);
// // let b = ary5.sort((a, b) => a - b).join("");
// // console.log(b);
// // if (a === b) {
// //     console.log("Both array are same");
// // } else {
// //     console.log("Both array are not same");

// // }
// //5.how to first letter of string do capital.
// let str4 = "amol";
// let char = str4.charAt(0).toUpperCase() + str4.slice(1);
// console.log(char);

// //.6 how to find occurance of letter into string.

// let string = prompt('please enter string');
// let letter = prompt('please enter letter');
// let strLength = string.length;
// let counter = 0;
// for (let i = 0; i < strLength; i++) {
//     console.log(string[i]);
// }

// // 7. swaping of two number without third variable and using variable.

// let a = 12;
// let b = 65;
// let temp = a;
// a = b;
// b = temp;
// console.log(`Value of a is:- ${a} and Value of b is:-${b}`);

// without third variable means using destructor
// [a, b] = [b, a];
// console.log(`Value of a is:- ${a} and Value of b is:-
// ${b}`);
//.8 find second larjest number from array.
// let ary = [4, 5, 3, 8, 9];
// let maxNum = Math.max(...ary);
// let index = ary.indexOf(maxNum);
// let ary1 = ary.splice(4, 1);
// console.log(ary);
// console.log(ary1);
// console.log(index);
// console.log(maxNum);
// let maxNum1 = Math.max(...ary);
// console.log(maxNum1);

// how to find union of an ary.
// union means merge two ary and remove duplicate ele.
// let ary1 = [1, 2, 6, 8, 17];
// let ary2 = [4, 8, 6, 19, 12, 17];
// let ary3 = ary1.concat(ary2)
// console.log([...new Set(ary3)]);

// how to print table using js function.
// const table = (Number) => {
//     for (let i = 1; i <= 10; i++) {
//         var res = i * Number;
//         console.log(`${Number}*${i} = ${res}`);
//     }
// }
// table(2);
// table(10);
// table(11);
// table(15);
// table(19);
// table(25);

// how to find vowels from string or check vowels.

// let string = prompt('Enter a string');
// if (string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u') {
//     console.log("string is vowels");
// } else {
//     console.log("string is not vowels");

// }


// how to find factorial of given number
// const num = prompt('Please enter a number');


// string = "ABC_123_PQR_456_XYZ_789";
// let a = string.split("_");
// console.log(a);
// [a, b, c, d, e, f] = ['ABC', '123', 'PQR', '456', 'XYZ', '789'];
// let num1 = parseInt(b, 10);
// let num2 = parseInt(d, 10);
// let num3 = parseInt(f, 10);

// let pair1 = [a, num1];
// console.log(pair1);

// let pair2 = [c, num2];
// console.log(pair2);

// let pair3 = [e, num3];
// console.log(pair3);


// ary = ["ABC", 123, "PQR", 456, "XYZ", 789]

// ["ABC_123", "PQR_456", "XYZ_789"]

// let [a, b, c, d, e, f] = ["ABC", 123, "PQR", 456, "XYZ", 789];
// let num1 = `${a}_${b}`;
// let num2 = `${c}_${d}`;
// let num3 = `${e}_${f}`;

// console.log(num1);
// let ary2 = [`${num1}`];
// let ary3 = [`${num2}`]
// let ary4 = [`${num3}`]

// let mainAry = ary2.concat(ary3).concat(ary4);
// console.log(mainAry);

let ary = ['ABC_123', 'PQR_456', 'XYZ_789'];

let add = ary.join("")
    .split("_").join("").split("")
    .filter((x) => !isNaN(x)).reduce((a, b) => a + parseInt(b), 0);
console.log(add);




// let add1 = ary.join("_")
//     .split("_").filter((x) => !isNaN(x)).join("").split("").reduce((a, b) => a + parseInt(b), 0)
//
// console.log(add1);
//
// let string = ary.join("").split("_")
// .filter((x) => isNaN(x));
// console.log(string);
