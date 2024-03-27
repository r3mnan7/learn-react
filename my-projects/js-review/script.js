const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const book = getBook(1);

//const title = book.title;
//const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

// Ternaries
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
// Condition ? if true : if false

console.log(`The book has ${pagesRange} pages`);

// Arrow Functions

// Traditional Function
// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow Function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Template literals
const summary = `${title} is a book with ${pages} pages written by ${author} in ${getYear(
  publicationDate
)}. The book has${hasMovieAdaptation ? "" : " not"} been adapted as a movie`;
summary;

// Short circuiting
// && Operator
//In the case of AND, the expression is evaluated until we get one false result because the result will always be false,
// independent of the further conditions.

console.log(true && "Something");
console.log(false && "Something");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null
// if not falsy then truey

// || operator
// In the case of OR, the expression is evaluated until we get one true result because the result will
// always be true, independent of the further conditions.

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// Optional chaining - the little ?.property, if the ?.property us undefined or null,
// the expression short circuits to undefined.
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// Goes wrong
console.log(book.reviews?.librarything?.reviewsCount || 0);
const countWrong = book.reviews?.librarything?.reviewsCount || "No data!";
countWrong;

// Nullish coalescing operator
// The nullish coalescing (??) operator is a logical operator that returns its right-hand
// side operand when its left-hand side operand is null or undefined, and otherwise
// returns its left-hand side operand.

// Useful for when the actual return is zero or null or something else falsey but that falsey value is still a
// usable value
const count = book.reviews.librarything?.reviewsCount ?? "No Data!";
count;
*/

// Array map method - loops over an array and RETURNS A NEW ARRAY after applying some function to it.

const books = getBooks();
books;

const x = [1, 2, 3, 4].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// Array filter method - filter out some elements of the array based on a condition
//const longBooks = books.filter((book) => book.pages > 500);
//longBooks;

// Can also chain array methods
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Array Reduce Method -  executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. The final result of
// running the reducer across all elements of the array is a single value.
// Reduces the entire array into one value

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
// acc is the accumulator, the current value of the final value we're reducing the array down to, starts at the starting value
// in our case above, starter is 0.

// Array sort method - sort an array

// const n = [10, 4, 35, 34, 79, 86, 125000, 42];
// const sorted = n.sort((a, b) => a - b);
// sorted;
// a and b are the current and next value respectively, in the callback function, when you get a negative value
// then the two numbers are sorted in an ascending way (smallest in a largest in b), b - a is descending sort
//n;
//sort changes the original array, however we do not usually want to mutate the data, so take a copy first.

/*
const n = [10, 4, 35, 34, 79, 86, 125000, 42];
const sorted = n.slice().sort((a, b) => a - b);
sorted;
n;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with immutable arrays - working with arrays without changing the source data
// 1) Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
*/

// Javascript does not wait for the fetch to complete, this is called a promise.
// the .then is run once the promise is fulfilled, which itself returns another promise.
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Async/Await - with the await keyword in an async function, we pause the code inside the function an wait
// on the previous async. When calling the function the rest of the code proceeds as normal, but pausing happens inside
// the function.
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  // return data;
}
getTodos();
// if we take the output of the async function we make another promise that requires the .then methods all over again
// so do all the things inside the async function rather than doing all the return and .then redundancy.
// const todos = getTodos();
// console.log(todos);
