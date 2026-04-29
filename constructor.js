//coonstructor

function person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColour=eye;
    this.nationality="English";
}
let myPerson =new person ("Caisy","Lolot",14 ,"Blue");

console.log("My father mr "+myPerson.firstName+" has "+myPerson.eyeColour+" eyes."+myPerson.nationality)


let name={
    name:"jane",
    age:22
};




