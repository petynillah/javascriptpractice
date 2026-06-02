let date= new Date()
console.log(date)        //outputs the current date and time 

let d=new Date(1994,12,24,5,55);   //takes set year,month,day,hour, minute,second as parameters
console.log(d)

let da= new Date("october 13,2004,11:13:67")    //date as string
console.log(da)

        // for easy reading of time use .toDateString()

let dt =new Date(0)
console.log(dt.toDateString())

let dy= new Date("2004-03");    //yyyy-mm-dd   is the standard formart
console.log(dy)

/*short date take mm/dd/yyyy formart
long date takes mmm dd yyyy formart    
month is in full or short form
month and day can be interchanged*/

let short = new Date("03/14/1999")
console.log(short)

let long =new Date( "March 13 2006");     //"March,13,2006"
console.log(long.toDateString())

let msc= Date.parse("March 13 2006")
console.log("converting time to millisecond")
console.log(msc)

console.log("To date")
let tdate = new Date(msc)
console.log(tdate)

//date methods... to get the year,month day date hour of now time
let mdate= new Date()
console.log(mdate)
console.log(mdate.getFullYear())
console.log(mdate.getMonth())

   //pass an arry of days and or months to get them as words
let month=["January", "February", "March", "April", "May",
     "June", "July", "August", "September", "October", "November", "December"]
console.log(month[mdate.getMonth()])
console.log(mdate.getDay())


//setting
console.log(mdate.setFullYear(2000))

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
            if(nums[i] + nums[i + 1] == target){
                console.log(i,i + 1 )
        }
    }
    twoSum([3,2,4],6)
    
};
console.log(String(false))  //converting boolean to string   or
console.log(false.toString())
console.log(Date().toString())
console.log(Number(""))   //convert string to a number
console.log(parseInt("20.67"))    //return an integer
console.log(parseFloat(20.47)) ;   //returns a floating number
//const x = + y;               its a variable....with the + , ite gets converted to a number
var y = "5";
  var x = + y;
  console.log(typeof y +"\n"+ typeof x)
  console.log(Number(false))       //converting boolean to number
  console.log(Number(d))           //converting date to number..in milliseconds
  console.log(d.getTime())   //does the same