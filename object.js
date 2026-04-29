//creating javascript object


                //using object literal
//a single Object,,,  like a variable
let a="john";

//a name(property),value pair

let person={
    name:"James",
    age:12,
    eyeColour:"Blue"
};


                   //using the new key word

let persons=new Object();
    persons.name="John";
    persons.age=14;
    persons.eyeColor="Pink";
    
console.log(persons);

//accesing  object property
console.log(persons.age+" Is the age of "+persons["name"])

//looping through propertiesin an object

//use for loop
let x;
let txt=" ";
for(x in persons){
    txt +=persons[x] +" ";
};
console.log(txt);

// adding a new object prperty

person.nationality="English";
person.country="England";
console.log(person);

//deleting a property
delete person.country
console.log(person)

//method in object
let student={
    name:"lolion",
    class:"form 2",
    age:12,
    studentDetails:function(){
        return this.name+ " is in "+this.class;             //method...function in an object
    }
};

console.log(student.studentDetails());

//adding a new method to an object
person.fullName= function(){
    return this.name+" of "+this.age+" years has "+this.eyeColour+" eyes"
};
console.log(person.fullName())


//built in methods
     ///convert to uppercase


let name="Schofield";
console.log(name.toUpperCase());

//using get  to obtain the value of a property
let animale={
    type:"cat",
    color:"pink",
    age:4,                                  //only that it has a simler syntax
    language:"eng",                         ////its the same as method in objects..
    get lang(){
        return this.language;
    }
}
console.log(animale.lang)

//straight way
console.log(animale.language)

//ussing set for setting the value of a property
let animalia={
    type:"cat",
    color:"pink",
    age:4,                                                
    language:"",                                       
    set lang(lang){
        return this.language=lang;
    }
}
animalia.lang="english";
console.log(animalia.language)



let legth={
    shape:"square",
    Size:"medium",                                    //gets the value as uppercase
    color:"Blue",
    get colo(){
        return this.color.toUpperCase();
    }
}

console.log(legth.colo)


let boy={
    name:"john",
    size:"medium",
    age:'',
    set ages(ages){
        return this.age=ages.toUpperCase();
    }
}

boy.ages="mid 14" ;
console.log(boy.age)

//object.define property
//used to add getters and setters

//define an object
let count = {counter:0};

//define the setters
Object.defineProperty(count,"reset",{
    get: function(){this.counter=0;}
});

Object.defineProperty(count,"increment",{
    get: function(){this.counter++;}
});

Object.defineProperty(count,"decrement",{
    get: function(){this.counter--;}
});

Object.defineProperty(count,"add",{
    set: function(value){this.counter+= value;}
});

Object.defineProperty(count,"subtraction",{
    set: function(value){this.counter-= value;}
});

//play with counter

count.reset;
count.add=10;
count.subtraction= 3;
count.increment;
count.decrement;

console.log(count.counter)


//a blueprint of creating many objectss of the same type
//an object type is created using an object constructor

//an object constructor .. which is the object type

function personia(first,last,age,eye){
    this.firstname= first;
    this.lastname=last;
    this.age=age;
    this.eyeColor=eye;
}

//create objects with new +contructor(personia) as key word

let mother=new personia("Jeremy","Nui",34,"Blue");
let father= new personia("Wambua","Nui",32,"yellow");
console.log("my father is "+ father.firstname+" and my mother is "+mother.lastname)


//adding property to an object

father.nationality="English";
console.log("my father is "+ father.firstname+" and he is "+father.nationality)

//adding method to an object

father.name= function(){
    return this.firstname+" "+this.lastname
}

console.log(father.name())

//adding a new property in the constructor
//can only be done by adding the new property in the constructor.. no other way


function perso(first,last,age,eye){
    this.firstname= first;
    this.lastname=last;
    this.age=age;
    this.eyeColor=eye;
    this.nationality="german";                 //added property
    this.name =function(){
        return this.firstname+" "+this.lastname;
    };
    this.changeName= function(name){
        return this.lastname=name;
    };
}

let girl= new perso("joan","boi",12,"pink");
console.log(girl.name())
console.log(girl.changeName("doli"))

//adding new properties to an object sconstructor
//prototype alows one to add propert to constructor and also a new method
perso.prototype.country="Japan";

console.log(girl.country)

//new method

perso.prototype.origin= function(){
    return this.nationality+" man is from "+this.country
}

console.log(girl.origin())


//changing the property of an object

let addInfo={
    name:"Ashbel",
    age: 23,
    country:"Hesbola",
    language:"Packistan"
};
         //changing the property if an object
Object.defineProperty(addInfo,"country",{ value: "France"});

console.log(addInfo.country);

//defining a getter
//get: function() {return language}
//define setter
//set: function(value) { language=value}

//makes language read only
Object.defineProperty(addInfo,"language",{writable:false});

//makes language not enumerable(countable)
Object.defineProperty(addInfo,"language",{enumerable:false});

//listing all properties of an object

Object.defineProperty(addInfo,"language", {enumerable:false});
console.log(Object.getOwnPropertyNames(addInfo))

//lists only enumerable properties
Object.defineProperty(addInfo,"language",{enumerable:false})
console.log(Object.keys(addInfo))

//adding  a property
Object.defineProperty(addInfo,"year",{value:"2009"});
console.log(Object.getOwnPropertyNames(addInfo))

//The Object.defineProperty() method can also be used to add Getters and Setters:
//Create an object
var per = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(per, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});

console.log(per.fullName)
