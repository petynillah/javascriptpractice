//function declaration     ... its saved and used for later when it is called
 function myFunction(a,b){
    return a*b;
 }

 myFunction( 2,7)               // calling a function
 console.log(myFunction( 2,7));           //printing a function  


 //function expression
                         // it has no name
 let x= function( a,b ){return a+b};         //function stored in a variable
console.log(x( 3,8));                   //the variable then used as a function
                           

// function can be called before being declared

minus (9,4);
console.log("calling a function before declaring it "+ minus (9,4));

function minus(a, b){
    return a-b;
}

//using a function as values
console.log("\n using a function as value "+ minus (9,4)*5);


          (function () {
            console.log("Hello!!");  // I will invoke myself
          })();

//
    //length property
function myFunction(a,b){
  return arguments.length;          //returns the number of arguments received when function is invoked
}
console.log(myFunction( 4,6));


//toString method
function myFunction(a,b){
  return a*b;
}
console.log(myFunction.toString())    //returns the function as a string just the way it is


//ARROW FUNCTION
//used intead of the normal function

const arrow= (a,b)=>  a*b;   //or
let arrows= (c,d)=>  {return c*d};
console.log(arrow(2,4))
console.log(arrows(2,4))
          //A function defined as the property of an object, is called a method to the object.
          //A function designed to create new objects, is called an object constructor


//using a function to get the maximum number in a list

function findMax(){
  let i;                                                //create the function
  let max=-Infinity;

  for(i=0; i<arguments.length; i++){
    if(arguments[i]>max){
      max=arguments[i];
    }
  }
  return max;
}

console.log("the maximum number among some numbers is " +findMax(2,34,65,12,32,9,39,65,44));                  //call and print the function



//creating a function that adds numbers

function findSum(){

  let sum=0;
  for(let i=0; i<arguments.length; i++){
    sum +=arguments[i];
  }
  return sum;
}

console.log("the sum of numbers is "+findSum(3,5,87,45,2,33,8));


var y = myFunction();            // x will be the window object

function myFunction() {
  return this;
}
console.log(y);


//invoking a function as a method
let person={
    firstName:"John",
    lastName:"Doe",                                  //this in her represents the person object
    age:45,                                          //  who is owner of the method fullName
    fullName :function(){                             //this.firstname means first nameproperty of the object person   
        return this.firstName +" "+ this.lastName;
    }
};
console.log(person.fullName())

let persons={
    firstName:"John",
    lastName:"Doe",                                  //this in her represents the person object
    age:45,                                          //  who is owner of the method fullName
    fullName :function(){                             //this.firstname means first nameproperty of the object person   
        return this;
    }

};
console.log(persons.fullName())    //returns the owner object which is the object person


//invoking a function using a function constructor

//the function constructor
function myFunction(arg1,arg2){
  this.firstName=arg1;                              // define the function ..object in a function
  this.lastName=arg2;
}


//the new object using constuctor
var construct= new myFunction("james", "Bond");       //create new function(object), using keyword new
console.log(construct.firstName);
console.log(construct.lastName);                   //print a value from the earlier object






//call()method

let persona={
  Fullname:function(){
    return this.Name1+ " "+ this.Name2;          // a pre defined object with a function that prints fullName
  }
}
let person1={
  Name1:"Johns",                            //object with info
  Name2:"Tomkins"
};

let person2={
  Name1:"Merilyn",                                 //object with info
  Name2:"Homes"
};

persona.Fullname.call(person2);             //to access the full name using original function.call(required person)
console.log(persona.Fullname.call(person2));


//call() with arguments
var aperson = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var persona1 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(aperson.fullName.call(persona1, "Oslo", "Norway"));

//apply()method is simmilar to call()method

console.log(persona.Fullname.apply(person2));

         // The difference is:

          //The call() method takes arguments separately.

          //The apply() method takes arguments as an array

console.log(aperson.fullName.apply(persona1,["Oslo","Argentina"]));

//simulating the maximum of a number

      //in a list of numbers
console.log(Math.max(4,5,6,7,8));

      //in an array
console.log(Math.max.apply(null,[4,5,6,7,8,]))
console.log(Math.max.apply(Math,[4,5,6,7,8,]))              //all give you the same result
console.log(Math.max.apply("",[4,5,6,7,8,]))

let array=[20,44,32,76,3,9,106,6,78,4];

function myArrayMax(array){
    return Math.max.apply(null, array);
}
console.log(myArrayMax(array)) 


function myFunction(){
  let a=4;
 return a*a;                                                   //a is a local variable
}                                                              //only used inside the function
console.log(myFunction())


let a=4;
function MyFunction(){                                        // a is a global variable
  return a*a ;                                                //used throughout the program
}
console.log(MyFunction())

//counter

//initiating counter
let couter=0;

//function to increment counter
var sum =(function add(){
  let counter =0;
 return function (){
  counter += 1; return counter;}()                    //nested function}
})()

//ca
console.log(sum)