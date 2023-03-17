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

function addBookToLibrary() {
    //Push new book to library using form information as book arguments
    let addedBook = new Book(
        document.querySelector('#title'),
        document.querySelector('#author'),
        document.querySelector('#pages'),
        document.querySelector('#read')
    )
    myLibrary.push(addedBook);
    document.getElementById('bookForm').style.display = 'none';
    //printInfo for addedBook if needed to update display
}

//Call up a form from a new book button
function showBookForm() {
    //display:none to display:block/flex/etc toggle on the form
    document.getElementById('newBookForm').style.display = 'block';
    //include any background color changes desired here
}

const newButton = document.querySelector('.new-btn')
newButton.addEventListener('click', showBookForm)

//Listener on submit button pushes new book to library array
const submitButton = document.querySelector('.submit-btn')
submitButton.addEventListener('click', addBookToLibrary)

//Example books to populate and test
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'not read yet')

//For each book display a line on grid

//Delete button for each book (data-attribute is index of array?)

//Change "read" status toggle