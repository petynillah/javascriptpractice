console.log( Math.PI)
console.log(Math.round(2.4567))   //rounds to the nearest integer
console.log(Math.ceil(4.45))   //rounds up the number
console.log(Math.floor(4.45))   // rounds down
console.log(Math.pow(3,4))   //power.. 3 to power of 2
console.log(Math.sqrt(81))
console.log(Math.abs(-2.56))  //returna the absolute positive value
console.log(Math.sin(70 * Math.PI/180))   // convert the degrees 70 to radian then find its sin.
console.log(Math.cos(46 * Math.PI / 180))
console.log(Math.max(34 ,56 ,67, 78))
console.log(Math.min(34 ,56 ,67, 78))
console.log(Math.random())   //returns a random number between 0 and 1
console.log(Math.floor(Math.random() * 10))   //returns random integer between 1 and 9
console.log(Math.floor(Math.random() * 101))   //random numre between 1 and 100
console.log(Math.floor(Math.random() * 10) + 1)  //random number between 1 and 10
     //function for finding a random integer
function minMaxRandInt(max, min){           //min max exclucive
    console.log(Math.floor(Math.random() *(max - min)) +min)
}
minMaxRandInt(34 ,56 ,67, 78)

function randIntIncl(min, max){             //min max inclusive
    return Math.floor(Math.random() *(max - min + 1)) +min;
}
console.log(randIntIncl(34 ,56 ,67, 78))

