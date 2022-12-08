

let myLibrary = [];
let id = 0;


//-------------------------------//
function Book(name, author, pagecount, status) {
  const bookObject = [];
  id++;
  bookObject.id = id;
  bookObject.name = name;
  bookObject.author = author;
  bookObject.pagecount = pagecount;
  bookObject.status = status
  return bookObject;
}



//-------------------------------//
addBook=(bookObject)=> {
  myLibrary.push(bookObject);
};
//-------------------------------//



const container = document.getElementById("container");
//Calls back to printInfo. Each item in myLibrary is a bookObject. Passed to printInfo parameter as an argument. Performs printInfo and returns.
//-------------------------------//
displayLibrary=()=> {
  myLibrary.forEach(printInfo);
};
//-------------------------------//



//-------------------------------//
printInfo=(bookObject)=>{
  console.log(Object.values(bookObject));
  var readBtn = document.createElement('button');
  readBtn.innerHTML=(bookObject.status);
  var removeBookBtn = document.createElement('button');
  removeBookBtn.innerHTML=("REMOVE BOOK");
  
  removeBookBtn.onclick = removeBook=()=> {
        for(i = 0; i<myLibrary.length; i++){
          if (myLibrary[i].name ==bookObject.name){
            myLibrary.splice(i, 1);
          }
       
        }
        
    console.log(
      `\nRemoved ${bookObject.name}\n---------------------------------------`
    );
  

    container.removeChild(elemDiv);
    id=1;
    function reOrder(bookObject){
      bookObject.id = id++;
    }
    
    myLibrary.forEach(reOrder);
    

    console.log(myLibrary);
    
  };
//-------------------------------//



//-------------------------------//
  readBtn.onclick = markRead=()=>{
    for(i=0; i<myLibrary.length; i++){
      if(myLibrary[i].name==bookObject.name){
      
    
        
        if(bookObject.status == "Unread"){
          readBtn.style.cssText="width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:5%;margin-bottom:auto;background-color:green;color:white;";
          bookObject.status="Read";
          readBtn.innerHTML="Read";
          console.log(bookObject.status);
      
        }
        else if(bookObject.status == "Read"){
          readBtn.style.cssText="width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:5%;margin-bottom:auto;background-color:red;color:white;";
          bookObject.status = "Unread";
          readBtn.innerHTML="Unread";
          console.log(bookObject.status);
        }
      }
    }
  }
//-------------------------------//


 //-------------------------------//
  var elemDiv = document.createElement('div');
  var topColor = document.createElement('div');
  var botColor = document.createElement('div');
  var bookTitle = document.createElement('h2');
  bookTitle.innerHTML = bookObject.name;

  var bookAuthor = document.createElement('h4');
  bookAuthor.innerHTML =bookObject.author;

  var bookPageCount = document.createElement('p');
  bookPageCount.innerHTML = bookObject.pagecount;

  elemDiv.append(topColor, bookTitle,bookAuthor, bookPageCount, readBtn, removeBookBtn, botColor);
  container.appendChild(elemDiv);
  topColor.style.cssText="width:100%; height:15%; background-color:rgb(140, 47, 42);border-radius:12px 12px 0 0;";
  botColor.style.cssText="width:100%; height:15%; background-color:rgb(140, 47, 42);border-radius:0 0 12px 12px;";
  removeBookBtn.style.cssText='width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:3%;margin-bottom:2%;';
//-------------------------------//

//-------------------------------//
  if(bookObject.status=="Read"){
    readBtn.style.cssText='width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:5%;margin-bottom:auto;background-color:green;color:white;';
  }else if(bookObject.status=="Unread"){
    readBtn.style.cssText='width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:5%;margin-bottom:auto;background-color:red;color:white;';
  }
 //-------------------------------//

 //-------------------------------//
  elemDiv.style.cssText='border:2px solid black;background-color:#f6e4b0;width:250px; height:400px;text-align:center;display:flex;flex-direction:column; border-radius:15px;';
  container.style.cssText='gap:2px; border:3px black solid;background-color:gray;height:100%;width:80%;padding:10px;display:flex;flex-direction:row;justify-content:center;margin-left:auto;margin-right:auto;flex-wrap:wrap;';
  
  elemDiv.addEventListener('mouseover',function(){
    elemDiv.style.cssText='scale:105%;border:2px solid black;background-color:#f6e4b0;width:250px; height:400px;text-align:center;display:flex;flex-direction:column;border-radius:15px;';
});
elemDiv.addEventListener('mouseleave',function(){
  elemDiv.style.cssText='scale:100%;border:2px solid black;background-color:#f6e4b0;width:250px; height:400px;text-align:center;display:flex;flex-direction:column;border-radius:15px;';
    }
  )
};
//-------------------------------//


//-------------------------------//
const testBook = new Book(
  "BookOne",
  "Jane Doe",
  "350",
  "Unread"
);


const testTwo = new Book(
  "BookTwo",
  "Autor Author",
  "931",
  "Read"
);

const testThree = new Book(
  "BookThree",
  "Some Person",
  "558",
  "Read"
);

const testFour = new Book(
  "BookFour",
  "Auth No",
  "121",
  "Unread"
);

const testFive = new Book(
  "BookFive",
  "John Doe",
  "412",
  "Unread"
);
//-------------------------------//

//-------------------------------//
addBook(testBook);
addBook(testTwo);
addBook(testThree);
addBook(testFour);
addBook(testFive);
displayLibrary();
//-------------------------------//




const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", addNewBook);



  
function addNewBook(){
  const titleValue = document.getElementById('bookTitle').value;
  const authorName = document.getElementById("author").value;
  const pagesValue = document.getElementById("pages").value;
  let readStatus = document.getElementById("readStatus").checked;
  if(titleValue != "" && authorName != "" && pagesValue !=""){

if(readStatus == false){
  readStatus = "Unread";  
}else{
  readStatus = "Read";
}

  const id = new Book(
    titleValue,
    authorName,
    pagesValue,
    readStatus
  );

  addBook(id);
  printInfo(id);
 
  console.log("Book added!");
  console.log(myLibrary);
  console.log(titleValue + "value");

}
}