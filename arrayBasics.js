//1. write the function that returns the sum of all numbers in an array


let numbers=[1,2,3,4];

function sum(total, value){
    return total+value;
};
console.log("The sum of the numbers is "+numbers.reduce(sum));

//2. write a function that returns the largest number in an array

let y=[20,44,32,76,3,9,106,6,78,4];
y.sort(function(a,b){return a-b});
//console.log(y)

console.log("\n "+y[y.length-1]+" is the largest value having arranged the numbers in ascending order \n")

    //give us the maximum number without sorting the values
                   //array y[] is already defined
function myArrayMax(y){
    return Math.max.apply(null, y);
}
console.log(myArrayMax(y)) 

//3 write a function that returns only even numbers in an array



//4 given an array, return a new array with each number doubled

let point=[34,5,8,24,97,100];           //define an array

function myFunction(value){             //define a function to do the calculations
    return value* 2;
}
let point1=point.map(myFunction);       //map the function giving it anothe name
console.log("\n the below values have been doubled")
console.log(point1);                     //print the results



//5 count how many numbres in an array are greater than 10

//6 use .map() to convert this aray into uppercase
let fruits=["apple", "banana","mango"]; 




//7 use .filter()to return numbers less than 5

let number=[2,7,3,9,4];

function less(value){
    return value< 5;
}
let newNumber=number.filter(less);

console.log("\n gives the numbers that are less that 5")
console.log(newNumber)

//8 use .reduce()to find the total sum
let x=[5,10,15];
 
function sum(total, values){
    return total+values;
}
let total= x.reduce(sum);

console.log("\n Find the total sum "+total)


//9  use .find() to find the first number greater than 20

let num=[4,12,56,34,9,7,22];

function first(value){
    return value>20;
};
console.log("\n The first numberthat is greater than 20 is "+num.find(first))

//10 use .includes() to check if the value exists in an array
let w=[2,4,6,8,10,12,42,56,86];
console.log(w.includes(5));
console.log(w.includes(10,2));  //takes 2 parameters... value and index
console.log(w.includes(2,1));


                       //OBJECTS
//11 create an object for student with name, age, course

let student={
    name:"Jane Njeri",
    age:23,
    course:"Medicine"
}
//12 write a function that returns all keys of an object
//keys is the same aspropetries
console.log(Object.keys(student))

//or
console.log("The keys to object student are \n "+Object.getOwnPropertyNames(student))

// Change a property
  // 1.
Object.defineProperty(student,"course",{value:" Italian"});

console.log(student.course)
                 //or
   // 2
student.name="Funely";
console.log(student.course);
                    //or 
  //3
//using setters


//13 write a function that returns all the values of an object
let txt=" ";  //start with an empty string
for( let y in student){
    txt+= student[y]+" ";
}
console.log(txt);
//14 count how many times each element appears in an array and return an object 
//15 given an object, check if a key exists

             //FUNCTIONS
//16 write a function that checks whether a number is even or odd
//17write a function that checks if a string is a palidrome
//18 write a function thta converts celcious to fahrenheit
//19 write a function that takes two numbers and returns the greater one
//20. write a function that reverses a string
//21 write a function that takes an array of student objects and returns the name of the students who scored above 70
let students=[
    {name:"John", marks:65},
    {name:"Mary", marks:80},
    {name:"Peter", marks:75},
    {name:"Jane", marks:60}
]

