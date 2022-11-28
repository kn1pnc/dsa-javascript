class Book
{

    private name: string;
    private pages: number;
    private isbn: string;

    constructor(name: string, pages: number, isbn: string)
    {
        this.name = name;
        this.pages = pages;
        this.isbn = isbn;
    }

    showBookInfo() {

        console.log(`Book: ${this.name}, ${this.pages}, ${this.isbn}`)

    }

}

const book = new Book('The chad book', 666, '12344321');
book.showBookInfo();