let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayInfo = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read + '.'
    }
}

function addBookToLibrary() {
    //Push new book to library using form information as book arguments and submit button
}

//Example books to populate and test
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'not read yet')

//For each book display a line on grid

//Call up a form from a new book button

//Delete button for each book (data-attribute is index of array?)

//Change "read" status toggle