let cars=["Volvo","Rav4","bmw","toyota"];
let text="";
                                                   //list going down
for(let i=0; i<cars.length; i++){
   text+= cars[i] +"\n";
   
}
console.log(text) 
/*let cars=["Volvo","Rav4","bmw","toyota"];
let text="";
                                                          //to bullet the values
for(let i=0; i<cars.length; i++){
   text+= "."+cars[i] +"\n ";
   
}
console.log(text)*/



//for/in loop.....loops through objects

let person={name:"Joan", age:14,gender:"female"};
let txt=" ";
let i;

for( i in person){
   txt += person[i]+" ";
}
console.log(txt)


          //for/of loop
   //loops over data structors that are iterable like arrays,strings,map and nodelist
   //collection that can be looped over

for( x of cars){
    console.log(x)
}
let str="homely"
for(x of str){
    console.log(x)
}

let no=3;
let nom="";
while(no<9){
    nom += +"The numner is "+ no;
    no++;
    console.log(no);
}

let y=2;
while(y<8){
    console.log(y);          // does the same job as one above and its simpler
    y++;
}

let a=0;
do{
    console.log(a)
    a++;
}
while(a<6)