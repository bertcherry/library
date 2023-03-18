let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.printInfo = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read + '.'
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    //Push new book to library using form information as book arguments
    let addedBook = new Book(
        document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#read').checked
    )
    myLibrary.push(addedBook);
    document.getElementById('form-container').style.display = 'none';
    //print info for addedBook if needed to update display
    publishCards();
}

//Call up a form from a new book button
function showBookForm() {
    //display:none to display:block/flex/etc toggle on the form
    document.getElementById('form-container').style.display = 'block';  
    //include any background color changes desired here
}

//Hide form if you click outside the dialog
function hideBookForm(e) {
    if (e.target === document.getElementById('form-container')) {
        document.getElementById('form-container').style.display = 'none'; 
    }
}

const newButton = document.querySelector('.new-btn')
newButton.addEventListener('click', showBookForm)

//Listener on submit button pushes new book to library array
const submitButton = document.querySelector('.submit-btn')
submitButton.addEventListener('click', addBookToLibrary)

//Listener outside the new book dialog to close
const formContainer = document.querySelector('#form-container')
formContainer.addEventListener('click', hideBookForm)

//Example books to populate and test
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'not read yet')

//For each book display a line on grid
function publishCards() {
    const bookCards = document.querySelector('.book-cards');
    while (bookCards.firstChild) {
        bookCards.removeChild(bookCards.firstChild);
    }
    for (const book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCards.appendChild(bookCard);
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = 'Title: ' + book.title;
        bookCard.appendChild(bookTitle);
        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = 'Author: ' + book.author;
        bookCard.appendChild(bookAuthor);
        const bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        bookPages.textContent = book.pages + ' pages';
        bookCard.appendChild(bookPages);
        const bookRead = document.createElement('div');
        bookRead.classList.add('read');
        if (book.read) {
            bookRead.textContent = 'read';
        } else {
            bookRead.textContent = 'not read';
        }
        bookCard.appendChild(bookRead);
    }
}

//Delete button for each book (data-attribute is index of array?)

//Change "read" status toggle