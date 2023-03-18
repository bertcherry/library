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
    publishTable();
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

//For each book display a line on table
function publishTable() {
    const bookTable = document.querySelector('.book-table');
    while (bookTable.firstChild) {
        bookTable.removeChild(bookTable.firstChild);
    }
    for (const book of myLibrary) {
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-row');
        bookRow.setAttribute('data-index', myLibrary.indexOf(book));
        bookTable.appendChild(bookRow);
        const bookTitle = document.createElement('td');
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;
        bookRow.appendChild(bookTitle);
        const bookAuthor = document.createElement('td');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = book.author;
        bookRow.appendChild(bookAuthor);
        const bookPages = document.createElement('td');
        bookPages.classList.add('pages');
        bookPages.textContent = book.pages;
        bookRow.appendChild(bookPages);
        const bookRead = document.createElement('td');
        bookRead.classList.add('td-wrapper');
        bookRow.appendChild(bookRead);
        const readInput = document.createElement('input');
        readInput.setAttribute('id', 'read-status')
        readInput.setAttribute('type', 'checkbox');
        readInput.setAttribute('aria-label', 'I\'ve read this book')
        if (book.read) {
            readInput.setAttribute('checked', true)
        }
        bookRead.appendChild(readInput);
        //Listener on checkbox to toggleRead
        readInput.addEventListener('change', toggleRead);
        const bookRemove = document.createElement('td');
        bookRemove.classList.add('td-wrapper');
        bookRow.appendChild(bookRemove);
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove Book';
        bookRemove.appendChild(removeButton);
        removeButton.addEventListener('click', removeBook);
    }
}

//Delete button for each book (data-attribute is index of array?)
function removeBook() {
    const bookIndex = this.parentElement.dataset.index;
    console.log(bookIndex);
    myLibrary.splice(bookIndex, 1);
    publishTable();
}

//Change "read" status toggle
function toggleRead() {
    //for the clicked object box's status, change read:true/false
    const bookIndex = this.parentElement.parentElement.dataset.index
    if (this.checked) {
        myLibrary.at(bookIndex).read = true;
    } else {
        myLibrary.at(bookIndex).read = false;
    }
}