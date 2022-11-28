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

class IBook extends Book
{

    constructor(title, pages, isbn, technology)
    {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology()
    {
        console.log(this.technology)
    }

}

const iBook = new IBook('A random book', 666, '12344321', 'JavaScript');
iBook.printIsbn();
iBook.printTechnology();