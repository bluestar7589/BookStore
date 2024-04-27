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
    if (isValidAllData()) {
        let userbook = getBook();
        if (userbook != null) {
            addBook(userbook);
        }
        showAddedBookInfo(userbook);
    }
}
function showAddedBookInfo(newBook) {
}
function isValidAllData() {
    throw new Error("Function not implemented.");
}
function getBook() {
    var newBook = getBook();
    return newBook;
}
function addBook(b) {
    throw new Error("Function not implemented.");
}
