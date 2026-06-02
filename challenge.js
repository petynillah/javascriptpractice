
/*
let inputYear=2014;
let years= new Date().getFullYear();
let year=years-inputYear
if(year>=18){
    console.log("Uko kadi");
}
else{
    console.log("Kula ufike kadi")
};


//function

function ageCalc(Byear){
    let currentYear= new Date().getFullYear();
    let age= currentYear-Byear;
    console.log(age);                                     //1.. a function that calculates the years

    if(age>=18){
        console.log("Uko kadi");
    }
    else{                                               //2..what are the conditions
        console.log("Kula ufike kadi");
    }
}
ageCalc(2025);
*/



let rent = 3000;
let deposit = 3000;
let today = new Date();
let fDate = new Date().setDate(2)


//days counter
let diff = today - fDate;
function dayCount(fDate,today){
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
let dayLate=dayCount()
console.log( "You are late on rent payment by "+dayLate +" days.")

//fine calculator

function fineCalc(dayLate){
    let totalfine = 0;
  if(dayLate > 30 && totalfine==deposit){
    console.log("Vacate")
  }else if(dayLate > 28){
     totalfine = 3000;
  }else if(dayLate >=21){
     totalfine = 1500;
  }else if(dayLate >= 14){
     totalfine = 1000;
  }else if( dayLate >=7){
     totalfine = 500;
  }else{
    console.log("no fine");
  }
 return totalfine;
}
console.log(" Your fine currently is "+fineCalc(dayLate))
