let student={
    name:"David Rayy",
    sclass:"IV",
    rollno:12
};

console.log(student)

//deleting property...delete rollno
delete student.rollno
console.log(student)

//object length
//updating 
student.rollno=12;
console.log(student)

//object length
//getting the legth of an object...the number of items in it
const length= Object.keys(student).length;
let lenth=Object.entries(student).length;
let len=Object.getOwnPropertyNames(student).length;
console.log("The length of the object students is " +length)
console.log(lenth)
console.log(len)

//display reading status

let library=[
        {
        author:"Bill Gates",
        title:"The Road Ahead",
        readingStatus:true
    },    {
        author:"Steve Jobs",
        title:"Walter Isaacson",
        readingStatus:true
    },
        {
        author:"Suzanne Collins",
        title:"Mockingjay:The",
        readingStatus:false
    }
];
console.log(library)

//cylinder volume

const pie=3.142;
let radius=4;
let height=20;

let volume= pie*radius**2*height;   // ** is the power operator 

console.log("The volume of a cylinder of radius "+radius+" and height "+height+" is "+volume)

//to 4 dp
let newVol= volume.toFixed(4);
console.log(newVol)//this gives the value as a strinng..
//convert back to number
let actualVolume=parseFloat(newVol);
console.log("The volume to 4 decimal places is "+actualVolume);

