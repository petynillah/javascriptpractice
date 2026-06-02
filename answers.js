//beginner
// 1. Even or Odd Checker
let num = 10;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Positive Check
let val = 5;
if (val > 0) console.log("The number is positive");

// 3. Day of the Week
let dayNum = 3;
switch (dayNum) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Other day");
}

// 4. Counting Up (1-10)
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 5. Multiplication Table (7s)
for (let j = 1; j <= 10; j++) {
    console.log(`7 x ${j} = ${7 * j}`);
}


//intermediate
// 1. FizzBuzz
for (let i = 1; i <= 30; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

// 2. Grade Categorizer
let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else console.log("F");

// 3. Leap Year Finder
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
}

// 4. Array Filter (Positive only)
let arr = [2, -5, 6, -1, 3];
for (let x of arr) {
    if (x > 0) console.log(x);
}

// 5. Prime Number Check
let n = 17;
let isPrime = n > 1;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime" : "Not Prime");


//advanced
// 1. Factorial
let fact = 1, target = 5;
for (let i = 1; i <= target; i++) fact *= i;
console.log(fact);

// 2. String Reverser
let str = "hello", reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// 3. Nested Pattern (Pyramid)
let rows = 3;
for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// 4. Armstrong Number (3-digit)
let numA = 153;
let sum = 0;
let digits = numA.toString().split("");
for (let d of digits) {
    sum += Math.pow(parseInt(d), 3);
}
console.log(sum === numA ? "Armstrong" : "Not Armstrong");
