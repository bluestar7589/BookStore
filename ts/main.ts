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
        let userBook = getBook();    
        if(userBook != null) {
            //display the added book information on the web page
            addBook(userBook);
        }
    }
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
        // create a populate Book object
        let newBook = new Book();
        newBook.isbn = txtIsbn.value;
        newBook.title = txtTitle.value;
        newBook.price = parseFloat(txtPrice.value);
        newBook.releaseDate = adjustDate(new Date(txtReleaseDate.value));
        return newBook;
    }

    return null; // when if any data is invalid on the currently form
    
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
    let releaseDate = adjustDate(new Date(releaseDateElement.value));
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
function addBook(newBook:Book):void{
    // display the added book information on the web page
    var displayDiv = document.getElementById("displayDiv");
    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = `ISBN: ${newBook.isbn}, Title: ${newBook.title}, Price: ${newBook.price}, Release Date: ${newBook.releaseDate}`;
    displayDiv.appendChild(infoParagraph);
}

/**
 * Clear all error messages from span elements
 */
function clearAllErrors():void {
    let allErrorSpans = document.querySelectorAll("main div form span");
    for(let i = 0; i < allErrorSpans.length; i++){
        let currentSpan = allErrorSpans[i];
        currentSpan.textContent = "";
    }
}

/**
 * To reset the form after the user click the submit button.
 */
function resetForm():void {
    let allErrorSpans = document.querySelectorAll("main div form span") as NodeListOf<HTMLElement>;
    for(let i = 0; i < allErrorSpans.length; i++){
        let currentSpan:HTMLElement = allErrorSpans[i];
        currentSpan.textContent = "*";
    }
    (<HTMLInputElement>document.getElementById("isbn")).value = "";
    (<HTMLInputElement>document.getElementById("title")).value = "";
    (<HTMLInputElement>document.getElementById("price")).value = "";
    (<HTMLInputElement>document.getElementById("releaseDate")).value = "mm/dd/yyyy"
}

/**
 * This function will adjust the date to the user's timezone.
 * @param date 
 * @returns the adjusted date by currently time zone
 */
function adjustDate(date: Date): Date {
    if(date.toString() != 'Invalid Date') {
        let userTimezoneOffset = date.toISOString();
        let parts = userTimezoneOffset.split("-");
        // Please note: JavaScript counts months from 0:
        // January is 0, February is 1, etc.
        return new Date(Number(parts[0]),  Number(parts[1]) - 1, Number(parts[2].substring(0,2)));
    }
    return null;
}

