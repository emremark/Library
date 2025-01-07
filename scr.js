class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(title, author, pages, read) {
        const book = {title, author, pages, read};
        this.books.push(book);
    }
    
}

const uiControler = (() => {
    const book = new Library;
    const dial = document.getElementById("book_dialog");
    const newBook = document.getElementById("add");
    const cls = document.getElementById("close");

    newBook.addEventListener("click", () => {
        dial.showModal();
    })

    cls.addEventListener("click", () => {
        dial.close();
    })

    const submition = () => {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").checked ? "read" : "not read";
        book.addBook(title,author,pages,read);
    }

    const divCreate = () => {
        const parent = document.getElementById("main");
        const newDiv = document.createElement("div");
        const titl = document.createElement("h3");
        const autho = document.createElement("h3"); 
        const page = document.createElement("h3");  
        const reading = document.createElement("h3");
        const readC = document.createElement("button");
        const remo = document.createElement("button");
        const index = book.books.length - 1;

        newDiv.className = "book";
        readC.id = "rd";

        titl.textContent = `Title: ${book.books[book.books.length - 1].title}`;
        autho.textContent = `Author: ${book.books[book.books.length - 1].author}`;
        page.textContent = `Pages: ${book.books[book.books.length - 1].pages}`;
        reading.textContent = `Book ${book.books[book.books.length - 1].read}`;
        remo.textContent = "Remove book";
        readC.textContent = "Read status";

        parent.appendChild(newDiv);
        newDiv.appendChild(titl);
        newDiv.appendChild(autho);
        newDiv.appendChild(page);
        newDiv.appendChild(reading);
        newDiv.appendChild(readC);
        newDiv.appendChild(remo);

        readC.addEventListener("click", () => {
            let buk = book.books[index];
            buk.read = buk.read === "read" ? "not read" : "read";
            reading.textContent = `Book ${buk.read}`;
        });

        remo.addEventListener("click", () => {
            newDiv.remove();
            book.books.splice(index, 1);
        })
    }

    const sub_btn = document.getElementById("submit");
    sub_btn.addEventListener("click", () => {
        submition();
        divCreate();
        document.getElementById("forma").reset();
        dial.close();
    });

})();
