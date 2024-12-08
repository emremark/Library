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

const dial = document.getElementById("book_dialog");
const newBook = document.getElementById("add");
newBook.addEventListener("click", () => {
    dial.showModal();
})
