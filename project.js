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
//console.log(library)




//for(i=0; i<library.length; i++){
  //  console.log(library[i]);
//}



for(i=0; i<library.length; i++){
    let read=library[i].title
  if(library[i].readingStatus===true){
        console.log("you have read "+ read );
    }else{
        console.log("you not read "+library[i].author+ " book")
    }
    
};


    
   
    

