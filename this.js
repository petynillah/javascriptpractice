//this in a method
let person={
    firstName:"John",
    lastName:"Doe",                                  //this in her represents the person object
    age:45,                                          //  who is owner of the method fullName
    fullName :function(){                             //this.firstname means first nameproperty of the object person   
        return this.firstName +" "+ this.lastName;
    }

};

console.log(person.fullName())


//alone....     it is a global object
var x= this;

console.log(x)


///in a function
//it refers to a global object[objecy window]
function myFunction(){
    return this;
}
console.log(myFunction());

//in event handlers like HTML refers to elements that receive the event
<button onClick="this.style.display='none'">
    Click to remove me!
</button>