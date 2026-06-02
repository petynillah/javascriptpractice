//function
class car{
    constructor(brand){
        this.carname=brand;
    }
}
//an object
var ncar = new car("ford");
console.log(ncar.carname)

//creating a method

class name{
    constructor(firstName){                   //the constructor
        this.fname=firstName;
    }
    present(){
        return "My name is "+ this.fname;              //the method
    }
}

//create an object
let intro = new name("Joice");
console.log(intro.present())


class names{
    constructor(lastName){
        this.lname=lastName;
    }
    present(x){
        return x + " my last name is "+this.lname;
    }
}

let last = new names("Loveis");
console.log(last.present("Hi,"))

          //static method
class student{
    constructor(name){
        this.myName = name;
    }
    static hello(){
        return "Helloow I am called" 
    }
}
let stud = new student();
console.log(student.hello())
// passing a value

class year{
    constructor(day){
        this.lastDay = day;
    }
    static today(x){
        return "today is "+ x.lastDay;
    }
}
Today = new year("Monday");
console.log(year.today(Today))

  //inheritance
  class library{
    constructor(book){
        this.bookName = book;
    }
    present(){
        return "The name of the book is "+ this.bookName;
    }
  }

  class category extends library{
    constructor(book, author){
        super(book);
        this.bookAuthor = author;
    }
    show(){
        return this.present() +", has the author as "+ this.bookAuthor;
    }
  }
mybook = new category("Baldacci","End game")
console.log(mybook.show())