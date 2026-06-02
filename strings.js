let txt="ahsdkeirytcvznmzkskue";

//getting the legth of a string
console.log("The length of a string is " +txt.length)

//return the position of the first occurence of the first character of a text in a string
let locate="This is the bestday of my very best life ";
console.log("using IndexOf to find the position of a text "+locate.indexOf("best"))

//the last occurence of the text in a string
console.log("The position of the last occurence of the same text in a string "+locate.lastIndexOf("best"))
//-1 is returned if the text isnot found
console.log("if no such word is found in a string,it indicates "+locate.indexOf("mine"))

//the second parameter is the starting position
console.log(locate.indexOf("best",15))
console.log(locate.lastIndexOf("best",15)) 

console.log("searching if a word  is in a string "+locate.search("best"))

//extracting part of a string
//1
console.log("\n\n")
console.log(locate.length)
console.log(locate)
console.log("extracting part of the text \n\n")
//slice,....take start and end values in the method
console.log(locate.slice(10, 30))
console.log(locate.slice(-30,-10))
console.log(locate.slice(10))           //when only one value is stated,the rest is choped off
console.log(locate.slice(-30))
console.log(locate.slice(-10))

//substring..same as slice ..takes no negative
console.log(locate.substring(15,25))
console.log(locate.substring(15))              //omoting the second parameter prints the rest of the statement

  //substr same as slice


  //.the second parameter stands for the length of the words
  //start and the length
console.log(locate.substr(10,12))
console.log(locate.substr(10))
console.log(locate.substr(-10))        //neative starts from the end

//replacing...it doesnt change the original tring

console.log(locate.replace("best","awsome"))    //its case sencitive
  

         //to make it insensitive /i
console.log(locate.replace(/Best/i,"awsome"))


      //to replace all the occurences we make it global match /g
console.log(locate.replace(/best/g,"awsome"))

        //changing to upper or lower case
console.log(locate.toUpperCase())

    //joining two or more strings
let txt1="  Love is here"
            //using concatenation 
                    //or

console.log(locate.concat(" ",txt1.toUpperCase()));

            //addition sign
console.log(locate+" "+txt1)

//removing white space
console.log(txt1.trim())
   //for those versions that do'nt support trim.. use repace version
console.log((txt1.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')));


//turning numbers to string..all this methords return strings
let number=2345.3456;
        console.log(number)
console.log(number.toString());

console.log(number.toExponential())
console.log(number.toExponential(3))    //inside is the number of decimal places.. and standatd form
console.log(number.toFixed(4))    //decimal places....best for momey
console.log(number.toPrecision(2))  //..significant figures

   //return the number as a number
console.log(number.valueOf())

//converting variable to number
console.log(Number("john"))   //returns NaN..means not a number
console.log(Number("28"))
console.log(Number(true))
console.log(parseFloat("10 years"))
console.log(parseInt("10 years"))
console.log(parseFloat("john"))
console.log(number.MAX_VALUE)