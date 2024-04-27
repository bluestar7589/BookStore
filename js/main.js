class Book {
}
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
window.onload = function () {
    let addBookBtn = document.getElementById("btnSubmit");
    addBookBtn.onclick = processBook;
};
function processBook() {
    clearAllErrors();
    let txtIsbn = document.querySelector("#isbn");
    let txtTitle = document.querySelector("#title");
    let txtPrice = document.querySelector("#price");
    let txtReleaseDate = document.querySelector("#releaseDate");
    if (isValidAllData(txtIsbn, txtTitle, txtPrice, txtReleaseDate)) {
        let userbook = getBook();
        showAddedBookInfo(userbook);
    }
}
function showAddedBookInfo(newBook) {
    var displayDiv = document.getElementById("displayDiv");
    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = `ISBN: ${newBook.isbn}, Title: ${newBook.title}, Price: ${newBook.price}, Release Date: ${newBook.releaseDate}`;
    displayDiv.appendChild(infoParagraph);
}
function getBook() {
    let txtIsbn = document.querySelector("#isbn");
    let txtTitle = document.querySelector("#title");
    let txtPrice = document.querySelector("#price");
    let txtReleaseDate = document.querySelector("#releaseDate");
    if (isValidAllData(txtIsbn, txtTitle, txtPrice, txtReleaseDate)) {
        let newBook = new Book();
        newBook.isbn = txtIsbn.value;
        newBook.title = txtTitle.value;
        newBook.price = parseFloat(txtPrice.value);
        newBook.releaseDate = new Date(txtReleaseDate.value);
        return newBook;
    }
}
function isValidAllData(isbnElement, titleElement, priceElement, releaseDateElement) {
    let isValidData = true;
    let isbn = isbnElement.value;
    if (!isValidIsbn(isbn)) {
        let isbnError = isbnElement.nextElementSibling;
        isbnError.textContent = "Invalid ISBN. Must be 13 characters long and only contain numbers.";
        isValidData = false;
    }
    let title = titleElement.value;
    if (title.trim() == "") {
        let titleError = titleElement.nextElementSibling;
        titleError.textContent = "Title is required.";
        isValidData = false;
    }
    let price = parseFloat(priceElement.value);
    if (isNaN(price) || price < 0) {
        let priceError = priceElement.nextElementSibling;
        priceError.textContent = "Price is required and must be a positive number.";
        isValidData = false;
    }
    let releaseDate = new Date(releaseDateElement.value);
    if (!isValidDate(releaseDate)) {
        let releaseDateError = releaseDateElement.nextElementSibling;
        releaseDateError.textContent = "Release Date is required and must be a valid date.";
        isValidData = false;
    }
    return isValidData;
}
function isValidIsbn(isbn) {
    let regex = /^[1-9]\d{12}$/;
    return isbn.length === 13 && regex.test(isbn);
}
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
function addBook(b) {
    throw new Error("Function not implemented.");
}
function clearAllErrors() {
    let allErrorSpans = document.querySelectorAll("main div form span");
    for (let i = 0; i < allErrorSpans.length; i++) {
        let currentSpan = allErrorSpans[i];
        currentSpan.textContent = "";
    }
}
function resetForm() {
    let allErrorSpans = document.querySelectorAll("main div form span");
    for (let i = 0; i < allErrorSpans.length; i++) {
        let currentSpan = allErrorSpans[i];
        currentSpan.textContent = "*";
    }
    document.getElementById("isbn").value = "";
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("releaseDate").value = "mm/dd/yyyy";
}
