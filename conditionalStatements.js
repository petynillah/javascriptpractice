
//if statements
let age=20;
//=> is an arrow not a  conditional statement

if (age>=18) { 
    console.log("You are an eligible voter");

};

//if else statements
let height=4;
if (height>3){
    console.log("Your height "+height+" is of the required height")
}else{
    console.log("Your height "+height+" is below the required height")
};

//if, else if, if statement

let  value=2;
if(value<2){
    console.log("excelent");
}
    else if(value<4){
    console.log("very good");
}
    else if(value<=6){
    console.log("good");
}
    else{
    console.log("work harder");
};


//switch statement... used instead of the if and if else statements
let day= 3;
 switch(day)
{
 case 1:{
    console.log("Sunny")
 }
 break;
 case 2:{
    console.log("Rainy")
 }
 break;

 case 3:{
    console.log("Windy")
 }
 break;
 
 default:
    console.log("invalid day")};


    //loop
    //for loop
    console.log(" for loop");
    for(let n=1; n<=5; n++){
        console.log(n)
    };
 console.log(" while loop");
    //while loop
    let x=1;
    while(x<=5){
        console.log(x);
        x++;
    };

    console.log(" do while loop");

    let i=1;

    do{
        console.log(i);
        i++;
    }
    while(i<=6);
console.log("loop control statement");
console.log("break");
    for(let y=0; y<=6; y++){
        if(y===3)
            break;
        console.log(y);
    };

    //
    console.log("continue statement");

    for(let t=0; t<=6;t++){
        if(t===4)
            continue;
        
        console.log(t);
    };