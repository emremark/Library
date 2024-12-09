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
    debugger
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
    debugger
}

//get input from the form, make a object and add to the array
const sub_btn = document.getElementById("submit")
sub_btn.addEventListener("click", () => {
    let tit = document.getElementById("title").value;
    let aut = document.getElementById("author").value;
    let nu = document.getElementById("pages").value;
    let rd = document.getElementById("read").value;
    const nBk = makeBook(tit,aut,nu,rd);
    debugger
    addToLib(nBk);
    debugger
    for (let b of myLib) {
        console.log(b.info());
    }
})
