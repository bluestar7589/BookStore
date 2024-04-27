/**
 * This class preresent for the Book with some information below:
 * - ISBN: String type, represent the book's ISBN number.
 * - title: String type, represent the book's title.
 * - price: number type, represent the book's price.
 * - releaseDate: Date type, represent the book's release date.
 */
class Book {
    /**
     * The 13 digit ISBN number
     */
    isbn: String;
    /**
     * Title of the book
     */
    title: String;
    /**
     * Price of the book
     */
    price: number;
    /**
     * Release date of the book
     */
    releaseDate: Date;
    
    /**
     * Constructor with 4 parameters. It will initialize all properties of this object.
     * @param isbn  The ISBN number of this book.
     * @param title The title of this book.
     * @param price The price of this book.
     * @param releaseDate The release date of this book.
     */
    // constructor(isbn: String, title: String, price: number, releaseDate: Date) {
    //     this.isbn = isbn;
    //     this.title = title;
    //     this.price = price;
    //     this.releaseDate = releaseDate;
    // }

}

//Book object test code
let mybook = new Book();
mybook.isbn = "123456";
mybook.title = "TypeScript Programming";
mybook.price = 100;
mybook.releaseDate = new Date("2024-04-26");
console.log(`The book's ISBN is ${mybook.isbn}`);
console.log(`The book's title is ${mybook.title}`);
console.log(`The book's price is ${mybook.price}`);
console.log(`The book's release date is ${mybook.releaseDate}`);

console.log(mybook);

window.onload = function() {
    // setup the button click event for add book form
    let addBookBtn = document.getElementById("btnSubmit") as HTMLButtonElement;
    addBookBtn.onclick = processBook;
    }

    /**
     * To process the book information from the form and add it to the book list.
     */
function processBook():void {
    if(isValidAllData()){
        let userbook = getBook();    
        if(userbook != null) {
            addBook(userbook);
        }
        // display the added book information on the web page
        showAddedBookInfo(userbook);
    }
}

/**
 * To display the added book information on the web page.
 * @param newBook The new book to be added to the book list.
 */
function showAddedBookInfo(newBook: Book) {

}

/**
 * To check if all the data in the form is valid.
 */
function isValidAllData():boolean {

    throw new Error("Function not implemented.");
}


/**
 * This function will retrieve all the book data
 * from the HTML page. If all data is valid, it will
 * be return a book object. if any data is invalid, it will return null
 * @returns
 */
function getBook():Book {
    // get all the field from the form and create a new book instance
    var newBook = getBook();

    return newBook;
}

/**
 * This function will add the book to the book list.
 * @param b The book to be added to the book list.
 */
function addBook(b:Book):void{
    throw new Error("Function not implemented.");
}

