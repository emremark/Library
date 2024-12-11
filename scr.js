function Book (title, author, n_pages, read) {
    this.title = title;
    this.author = author;
    this.n_pages = n_pages;
    this.read = read;
    this.info = function() {
        return this.title + ' ' + 'by' + ' ' + this.author + ',' + ' ' + this.n_pages + ' ' + 'pages' + ',' + ' ' + this.read
    } 
}

//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
//console.log(theHobbit.info());

const myLib = [];

function addToLib(Book) {
    myLib.push(Book)
    
}
//open form and close form 
const dial = document.getElementById("book_dialog");
const newBook = document.getElementById("add");
newBook.addEventListener("click", () => {
    dial.showModal();
})
const cls = document.getElementById("close")
cls.addEventListener("click", () => {
    dial.close();
})

//Create a new object
function makeBook(t,a,n,r) {
    const bk = new Book(t,a,n,r)
    return bk
    
}
/////
function makeDiv(argu) {
    
    //for (let o of myLib) {
        //if (!myLib.includes(o)) {
            const newDiv = document.createElement("div");
            newDiv.className = "book";
            newDiv.textContent = argu.info();
            //newDiv.id = myLib.indexOf(o);
            const rmv = document.createElement("button");
            rmv.textContent = "X";
            rmv.className = "removing";
            const parent = document.getElementById("main");
            parent.appendChild(newDiv);
            newDiv.appendChild(rmv);
            rmv.addEventListener("click", () => {
                newDiv.remove();
                let ind = myLib.indexOf(argu);
                myLib.splice(ind, 1);
            })
       // }
       // else {
            //nothing
       // }
//}
}
  

//Create div, take object as arg and make div
//function makeDiv(ob) {
    
    /*
    const newDiv = document.createElement("div")
    newDiv.className = "book";
    newDiv.id = ob.title;
    newDiv.textContent = ob.info();
    const rmv = document.createElement("button")
    rmv.textContent = "X"
    const parent = document.getElementById("main");
    parent.appendChild(newDiv);
    newDiv.appendChild(rmv)
    
}
*/
//Remove book div when X button is pushed
/*
const buttons_remove = document.querySelectorAll(".removing")
buttons_remove.forEach(dugme => {
    dugme.addEventListener("click", () => {
        let par = dugme.parentElement;
        par.remove();
    })
})
*/

//Get input from the form, call function to make a object, call function to create div.
const sub_btn = document.getElementById("submit")
sub_btn.addEventListener("click", () => {
    let tit = document.getElementById("title").value;
    let aut = document.getElementById("author").value;
    let nu = document.getElementById("pages").value;
    let rd = document.getElementById("read").value;
    const nBk = makeBook(tit,aut,nu,rd);
    addToLib(nBk);
    //debugger
    makeDiv(nBk);
    //debugger
})

