
//an array
let array=["Joan","James","John","Julian"];
//accessing items in an array
console.log(array);
//accesing a speficic item in an array
console.log(array[2]);

//also worrks like creating an array
let name=new Array("Joan","James","John","Julian");
console.log(name);

   //changing the value of an element
name[0]="Olivia";
console.log(name)

//to get the number of elements in an array
console.log("The names array has 4 elements inside "+name.length);

//accesing the first element
console.log(name[0]+" is the first element in the array");

//accessing the last elemnt
console.log(name[name.length-1]+" is the last item in name array");

//adding the last element element
name.push("Vulery");
console.log(name)
//or
name[name.length]="Adidaus";
console.log(name)

//adding the first item
name.unshift("Manana","miami");
console.log(name)


//removing the last element
name.pop();
console.log(name)

//removing the first element
name.shift();
console.log(name)

//returns the name of the element that has been removed
let x= name.shift()
console.log(x)

delete name[1];
console.log(name)

console.log("typeof operator returns an array as being an "+typeof name)

//converting an array to a string
console.log(name.toString());


//join()works the same way as .toString.. the only diffence being that u can input the separator
console.log(name.join(" * "))

//sorting an array
name.push("Andrian","Olivia")
console.log(name)

name.sort()            //arranging names from A to Z
console.log(name)

name.reverse()             //reversing the names
console.log(name)


//sorting numbers in ascending and descending order
let points=[40,33,100,93,2,5];
points.sort(function(a,b){return a-b});
console.log (points)

points.reverse()
console.log(points)

//sort numbers in desending order
points.sort(function(a,b){return b-a});
console.log(points)


//.map().. a function that multiplies the values in the array by the listed factor

function myFunction(value){
    return value* 3;
};
let points2=points.map(myFunction);
console.log("returns numbers that have been doubled")
console.log("\n "+points2)

let students=[
    {
        name:"Jeri",
        age:15,
        class:"2W"
    },
     {
        name:"David",
        age:14,
        class:"1R"
    }
];

console.log(students);
let newStudent=students.map(s => s.name);
console.log(newStudent)


//for values greater

function vgreater(value){
    return value> 18;
};

let great18= points.filter(vgreater);
console.log("\n \n returns values that are greater than 18 from list of array")
console.log(great18);


//check of all array pass a test.. if all array are over 18...
//if not then the result is false
function over(value){
    return value>18;
}

let over18=points.every(over);

console.log("\n Are all values larger than 18? ");
console.log(over18);

//check if some of the values pass the test

       // make sure you declare a function
let somePoints=points.some(over);
console.log("Do some of the points larger than 18 \n "+ somePoints)

//  getting the sum of the values
function add(total, value){
    return total+value;
};
let sum= points.reduce(add);

console.log("adds the values of an array");
console.log(sum);
   //or
let total= points.reduceRight(add);
console.log(total)


//serching the position of an item in an array
console.log(name)
console.log("The position of Julian in the Name array is "+name.indexOf("Julian"));

name.push('John');
console.log("The position of the first John in the Name array is "+name.indexOf("John"));
console.log("The position of the last John in the Name array is "+name.lastIndexOf("John"));


///.find() returning the value of the first array that passes a test
function item(value){
    return value>18;
};

//let firstItem=points.find(item);

//               can either create a variable or pass the command inside the console.log
console.log("\n The first value that is greater than 18 is "+ points.find(item));

//finding the index of the first elememt that passes a test
console.log( points);
console.log("\n The first value that is greater than 18 is position "+ points.findIndex(item));

//check whether an array or a string contains certain elements

console.log(name.includes("James"));
console.log(name.includes("John"));





