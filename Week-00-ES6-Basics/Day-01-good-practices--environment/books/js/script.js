const titles = books.map (book => book.title);
let booksRented = books.filter(book => book.rented > 0).length;
// let maxRente = books.reduce((mr, book) => { return Math.max(mr, book.rented)}, books[0].rented );
// let maxRente = books.reduce((mr, book) => mr > book.rented ?  mr : book.rented, books[0].renetd);
// let mostRented = books.reduce((mr, book) => mr.rented > book.rented ?  mr : book, books[0]);
let mostRented = books.reduce((mr, book) => mr.rented > book.rented ?  mr : book, books[0]).title;
/*books.map((book, index) => {
  if (book.id == 133712)
    books.splice(index, 1);
})
let fltr1 = book => book.id == 133712;
let isDeleted = books.filter(fltr1).length == 0;*/

let fltr2 = book => book.id != 133712;
let  others = books.filter(fltr2)
                    .map(book => book.title);