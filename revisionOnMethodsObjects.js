let name= "wambui";
console.log(name)

//arrays
let fruits=[
    {car:"vox", made:"china"},
    {car:"BMW", make:"japan"}
];
console.log(fruits)

//objects
let person={
    name:[{name1:"jane"},{name2:"Otieno"}],
    gender:"female",
    age:10
};

console.log(person)

//funtion
function greet() {
    let name="Joan";
    console.log("jhello "+name);
}
greet();


//CRUD
//create

let student={
    name:"James",
    adminNo:2906
}
//read
console.log(student)
console.log(student.name)

//update
student.gender="male";
student.admitted=2006;
console.log(student)

//delete
delete student.adminNo
console.log(student)

//funtion
function greet() {
    let name="Joan";
    console.log("jhello "+name);
}
greet();




let clothes={
    type:"jeans",
    color:"green",
    //method... a funtion inside an object
    cry:function(){
        console.log("Jonathan is crying "+ this.type);
    }

};

clothes.cry();


function myFunction(arg1,arg2){
  this.firstName=arg1;                              // define the function ..object in a function
  this.lastName=arg2;
}


//the new object using constuctor
var construct= new myFunction("james", "Bond");       //create new function(object), using keyword new
console.log(construct.firstName);
console.log(construct.lastName);   

// Constructor function definition
function MyFunction(arg1, arg2) {
    // Assign properties to the object being created
    this.firstName = arg1;
    this.lastName = arg2;
}

// Create a new object using the constructor
var constructs = new MyFunction("James", "Bond");

// Display the object properties
console.log("First Name:", constructs.firstName);
console.log("Last Name:", constructs.lastName);

// You can also add methods to the constructor's prototype
MyFunction.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

console.log("Full Name:", constructs.getFullName());

