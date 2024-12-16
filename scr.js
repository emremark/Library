function Book (title, author, n_pages, read) {
    this.title = title;
    this.author = author;
    this.n_pages = n_pages;
    this.read = read;
    this.info = function() {
        return 'Title:' + ' ' + this.title + '<br>' +
               'Author:' + ' ' + this.author + '<br>' + 
               'Pages:' + ' ' + this.n_pages + '<br>' + 
               this.read
    } 
}

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
//Create a div for Book object, display it on page. Event listener to remove book button
function makeDiv(argu) {
            const newDiv = document.createElement("div");
            const ndc = document.createElement("div");
            const chk = document.createElement("input");
            chk.type = "checkbox";
            chk.id = "readCh"
            const lab = document.createElement("label");
            lab.htmlFor = "readCh";
            ndc.className = "dcont";
            newDiv.className = "book";
            ndc.innerHTML = argu.info();
            const rmv = document.createElement("button");
            rmv.textContent = "X";
            lab.textContent = "Change read status"
            rmv.className = "removing";
            const parent = document.getElementById("main");

            parent.appendChild(newDiv);
            newDiv.appendChild(ndc);
            if (argu.read === "Read") {
                chk.checked = true;
                newDiv.appendChild(chk);
            }
            else {
                chk.checked = false;
                newDiv.appendChild(chk);
            }
            newDiv.appendChild(lab);
            newDiv.appendChild(rmv);

            rmv.addEventListener("click", () => {
                newDiv.remove();
                let ind = myLib.indexOf(argu);
                myLib.splice(ind, 1);
                
            })
            chk.addEventListener("click", () => {
                argu.read = chk.checked ? "Read" : "Not Read";
                ndc.innerHTML = argu.info();
            })
}

//Get input from the form, call function to make a object, call function to create div.
const sub_btn = document.getElementById("submit")
sub_btn.addEventListener("click", () => {
    let tit = document.getElementById("title").value;
    let aut = document.getElementById("author").value;
    let nu = document.getElementById("pages").value;
    let rd = document.getElementById("read").checked ? "Read" : "Not Read";
    const nBk = makeBook(tit,aut,nu,rd);
    addToLib(nBk);
    makeDiv(nBk);
    document.getElementById("forma").reset();
    dial.close();
})

