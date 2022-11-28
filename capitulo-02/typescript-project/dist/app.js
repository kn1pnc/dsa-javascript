var Book = /** @class */ (function () {
    function Book(name, pages, isbn) {
        this.name = name;
        this.pages = pages;
        this.isbn = isbn;
    }
    Book.prototype.showBookInfo = function () {
        console.log("Book: ".concat(this.name, ", ").concat(this.pages, ", ").concat(this.isbn));
    };
    return Book;
}());
var book = new Book('The chad book', 666, '12344321');
book.showBookInfo();
