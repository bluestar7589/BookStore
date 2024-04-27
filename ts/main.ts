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
        // clear all error messages
        clearAllErrors();
        // get all the field from the form and create a new book instance
        let txtIsbn = document.querySelector("#isbn") as HTMLInputElement;
        let txtTitle = document.querySelector("#title") as HTMLInputElement;
        let txtPrice = document.querySelector("#price") as HTMLInputElement;
        let txtReleaseDate = document.querySelector("#releaseDate") as HTMLInputElement;
    if(isValidAllData(txtIsbn,txtTitle,txtPrice,txtReleaseDate)){
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
    // display the added book information on the web page
    var displayDiv = document.getElementById("displayDiv");
    var infoParagraph = document.createElement("p");
    infoParagraph.innerHTML = `ISBN: ${newBook.isbn}, Title: ${newBook.title}, Price: ${newBook.price}, Release Date: ${newBook.releaseDate}`;
    throw new Error("Function not implemented.");
}




/**
 * This function will retrieve all the book data
 * from the HTML page. If all data is valid, it will
 * be return a book object. if any data is invalid, it will return null and 
 * display error message on the web page.
 * @returns
 */
function getBook():Book {
    // get all the field from the form and create a new book instance
    let txtIsbn = document.querySelector("#isbn") as HTMLInputElement;
    let txtTitle = document.querySelector("#title") as HTMLInputElement;
    let txtPrice = document.querySelector("#price") as HTMLInputElement;
    let txtReleaseDate = document.querySelector("#releaseDate") as HTMLInputElement;
    
    if(isValidAllData(txtIsbn, txtTitle, txtPrice, txtReleaseDate)){
        let newBook = new Book();
        newBook.isbn = txtIsbn.value;
        newBook.title = txtTitle.value;
        newBook.price = parseFloat(txtPrice.value);
        newBook.releaseDate = new Date(txtReleaseDate.value);
        return newBook;
    }
    
}

/**
 * To check if all the data in the form is valid.
 */
function isValidAllData(isbnElement:HTMLInputElement, titleElement:HTMLInputElement, priceElement:HTMLInputElement, releaseDateElement:HTMLInputElement): boolean {
    
    // validate all the data
    let isValidData:boolean = true;

    // validate ISBN
    let isbn: string = isbnElement.value;
    if(!isValidIsbn(isbn)){
        let isbnError = isbnElement.nextElementSibling as HTMLElement;
        isbnError.textContent = "Invalid ISBN. Must be 13 characters long and only contain numbers.";
        isValidData = false;
    }

    // validate title
    let title = titleElement.value;
    if (title.trim() == ""){ 
        let titleError = titleElement.nextElementSibling as HTMLElement;
        titleError.textContent = "Title is required.";
        isValidData = false;
    }

    // validate price
    let price = parseFloat(priceElement.value);
    if (isNaN(price) || price < 0){
        let priceError = priceElement.nextElementSibling as HTMLElement;
        priceError.textContent = "Price is required and must be a positive number.";
        isValidData = false;
    }

    // validate release date
    let releaseDate = new Date(releaseDateElement.value);
    if (!isValidDate(releaseDate)){
        let releaseDateError = releaseDateElement.nextElementSibling as HTMLElement;
        releaseDateError.textContent = "Release Date is required and must be a valid date.";
        isValidData = false;
    }

    return isValidData
}

/**
 * This function will validate the ISBN number.
 * @param isbn the isb need to be validated
 * @returns true if data is valid and false if data is invalid.
 */
function isValidIsbn(isbn: string):boolean {
    // Check if the ISBN is 13 characters long and only contains numbers
    let regex = /^[1-9]\d{12}$/;
    return isbn.length === 13 && regex.test(isbn);
}

/**
 * This function will validate the date.
 * @param date the date need to be validated
 * @returns true if data is valid and false if data is invalid.
 */
function isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
}

/**
 * This function will add the book to the book list.
 * @param b The book to be added to the book list.
 */
function addBook(b:Book):void{
    throw new Error("Function not implemented.");
}

/**
 * Clear all error messages from span elements
 */
function clearAllErrors():void {
    let allErrorSpans = document.querySelectorAll("span");
    for(let i = 0; i < allErrorSpans.length; i++){
        let currentSpan = allErrorSpans[i];
        currentSpan.textContent = "";
    }
}

