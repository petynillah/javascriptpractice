      //even and odd checker
let number=7778532

if(number%2===0){
    console.log(number+" is an even number");
}
else{
    console.log(number+" is an odd number")
};

        //•	Positive/Negative Check
let num=-9997639
if(num>0){
    console.log("The number "+num+" is positive")
}
else{
    console.log("The number "+num+ " is negative")
}


     //•	Day of the Week
     let day =5;
     switch(day){
        case 1:{console.log("Monday");}
        break;
        case 2:{console.log("Tuesday");}
        break;
        case 3:{console.log("Wednesday");}
        break;
        case 4:{console.log("Thursday");}
        break;
        case 5:{console.log("Friday");}
        break;
        case 6:{console.log("Saturday");}
        break;
        case 7:{console.log("Sunday");}
     }

            //•	Counting Up: Write a while loop that prints the numbers 1 through 10 to the console.
    console.log("counting")
    
            let i=1;
    while(i<=10){
        console.log(i);
        i++;
    }

        //•	Multiplication Table:: Create a for loop that prints the multiplication table for the number 7 up to 10 rows

        console.log("Multiplication")
for(let j=1; j<=10; j++){
     console.log(`7 * ${j} = ${7 * j}`);
}

/*FizzBuzz (Classic): Iterate from 1 to 30 using a loop. Print "Fizz" for multiples of 3,
 "Buzz" for multiples of 5, and "FizzBuzz" for numbers divisible by both.*/

 for(let i=1; i<=30; i++){
    if(i%3===0 && i%5 ===0){console.log("FizzBizz");}
    else if(i%3 === 0){console.log("Fizz");}
    else if(i%5 === 0){console.log("Bizz");}
    else{console.log(i)}
 }

 //•	Grade Categorizer: Use an else if ladder to assign
 //  a letter grade (A, B, C, D, F) based on a numerical score variable.
 let grade=53;
if(grade>=80){console.log("A");}
else if(grade>=60){console.log("B");}
else if(grade>=50){console.log("C");}
else if(grade>=40){console.log("D");}
else{console.log("D")}

//•	Leap Year Finder: Write a program that determines if a given year is a leap year 
// using logical operators like && and || within an if condition.


//gregorian calender..years divisible by 4 and not by 100 and century years divisible by 400
let year=1900;
if((year % 4 ===0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a leap year")}
else{console.log(year + " is not a leap year")}

//•	Array Filter: Given an array like [2, -5, 6, -1, 3], use a loop and an if statement to log only the positive numbers.

let array=[2, -5, 6, -1, 3];
for(let i=0; i<array.length; i++){
    if(array[i] >= 0){console.log(array[i]);}
}
console.log("prints the same thing")
        for(let x of array){
            if(x > 0){console.log(x)}           //its cleaner.. checks each and every one
        }

//•	Prime Number Check: Write a loop that checks if a given number is prime by attempting to 
// divide it by  every number from 2 up to its square root. [8, 9, 18, 19, 20] 


//•	Nested Patterns: Use nested for loops to print a pyramid pattern of asterisks (*).

let rows= 5;

       for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}