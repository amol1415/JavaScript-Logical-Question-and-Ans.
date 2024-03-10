
// // // //.1
// // // let a = 10; b = 10; c = 10;
// // // if (a == b == c) {
// // //     // 10==10 => true means 1 then 1==10 this is wrong.
// // //     console.log("Hello");
// // // } else {
// // //     console.log("Good Morning");
// // // }

// // // //.2 pre increment and predecrement
// // // let d = 5;
// // // // console.log(++5);
// // // // console.log(5++); //direct constant num la karu shakt nahi it gives error but u are doing on variable then it is applicable.

// // // console.log(++d);
// // // console.log(d++);

// // // //.3
// // // let x = 5;
// // // let y = 10;
// // // let z = 15;

// // // if (x < y && y < z || z > x) {
// // //     console.log("Congratulations!");
// // // } else {
// // //     console.log("Try again!");
// // // }


// // // //.4
// // // let a = 20;
// // // let b = 15;
// // // let c = 25;

// // // if ((a > b || b < c) && (c === a + b)) {
// // //     console.log("You got it!");
// // // } else {
// // //     console.log("Try again!");
// // // }


// // // //.5
// // // let num1 = 8;
// // // let num2 = 4;

// // // if ((num1 > num2 && num1 % num2 === 0) || (num2 > num1 && num2 % num1 === 0)) {
// // //     console.log("Divisible!");
// // // } else {
// // //     console.log("Not divisible!");
// // // }


// // // //.6
// // // let x = 12;
// // // let y = 5;
// // // let z = 8;

// // // if ((x > y && x < z) || (x < y && x > z)) {
// // //     console.log("In between!");
// // // } else {
// // //     console.log("Out of range!");
// // // }


// // // //.7
// // // let a = 7;
// // // let b = 3;
// // // let c = 5;

// // // if ((a * b === 21 || c % b === 2) && (c - a === b)) {
// // //     console.log("Conditions met!");
// // // } else {
// // //     console.log("Try again!");
// // // }

// // //.8
// // let x = 1; // number 1
// // let y = '1'; // string 1

// // console.log(x == y);

// // console.log((x === y)); 


// // //.9 
// // let a = 10;
// // let b = '10';

// // console.log(a == b);
// // console.log(a === b);


// // //.10.
// // let str1 = 'Hello';
// // let str2 = 'hello';

// // console.log(str1 !== str2);


// // //.11
// // let num = 5;

// // if (num > 0 && num % 2 === 0) {
// //     console.log('Positive even number');
// // } else {
// //     console.log('Not a positive even number');
// // }

// // //.12
// // let x = 10;
// // let y = '10';

// console.log(x != y);
// console.log(x !== y);

// //.13
// let x = 10;
// let y = '10';

// console.log(x !== y);
// console.log(x == y);

// //.14
// let a = 20;
// let b = 5;
// console.log(a >= b && a !== b);

// //.15
// let str = 'Hello';

// if (str.length > 5 || str.includes('o')) {
//     console.log('Condition met!');
// } else {
//     console.log('Condition not met!');
// }


// //.16
// let phrase = 'JavaScript is fun!';

// if (phrase.length < 20 || phrase.indexOf('fun') !== -1) {
//     console.log('Enjoy coding!');
// } else {
//     console.log('Keep learning!');
// }


// //.17
// let text = 'Learning JavaScript is essential for web development!';

// if (text.includes('JavaScript') && text.slice(9, 21) === 'JavaScript') {
//     console.log('You are on the right track!');
// } else {
//     console.log('Keep exploring!');
// }


// //. 18
// let sentence = 'Programming with GPT is fascinating!';

// if (sentence.charAt(0) === 'P' && sentence.indexOf('GPT') !== -1) {
//     console.log('Awesome choice!');
// } else {
//     console.log('Keep discovering!');
// }


//..19
var obj = {
    name: "vivek",
    getName: function () {
        console.log(this.name);
    }
}
obj.name = 'Amol';
obj.getName();


//.20
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined)