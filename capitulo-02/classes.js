class Book
{

    constructor(title, pages, isbn)
    {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn()
    {
        console.log(this.isbn);
    }

}

const book = new Book('A random book', 666, '12344321');
book.printIsbn();