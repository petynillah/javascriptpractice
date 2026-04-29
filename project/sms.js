let studenta=[];
//function
   //an object inside a function.

   //creating...adding information in a database..here its in an array
   //a function that creates..adding information
function addStudent(name,gender,age){
    let student={
    id :Date.now(),
    name ,
    gender, 
    age
};
studenta.push(student)
}
addStudent("Jane","Male",22);
addStudent("John","Female",23);

//read
//a funtion that reads information from the system
function getStudents(){
    return studenta;
} 
console.log(getStudents());

//updating
//a function that updates the information in a system

function studentUpdate(){
   studenta[1].name="eruinyi";
    return studenta;
}
console.log(studentUpdate());

//delete
//deleting a function in a system
function deleteStudent(){
    return studenta.pop();
}
console.log(deleteStudent());