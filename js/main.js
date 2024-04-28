class Book {
}
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
        let userBook = getBook();
        if (userBook != null) {
            addBook(userBook);
        }
    }
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
        newBook.releaseDate = adjustDate(new Date(txtReleaseDate.value));
        return newBook;
    }
    return null;
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
    let releaseDate = adjustDate(new Date(releaseDateElement.value));
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
function addBook(newBook) {
    var displayDiv = document.getElementById("displayDiv");
    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = `ISBN: ${newBook.isbn}, Title: ${newBook.title}, Price: ${newBook.price}, Release Date: ${newBook.releaseDate}`;
    displayDiv.appendChild(infoParagraph);
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
function adjustDate(date) {
    if (date.toString() != 'Invalid Date') {
        let userTimezoneOffset = date.toISOString();
        let parts = userTimezoneOffset.split("-");
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2].substring(0, 2)));
    }
    return null;
}
