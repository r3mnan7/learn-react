# Notes from the React Course

- [Javascript Fundamentals](#javascript-fundamentals)
  - [Destructuring](#destructuring)
  - [Ternaries](#ternaries)
  - [Traditional vs. Arrow Functions](#traditional-vs-arrow-functions)
    - [Traditional Function](#traditional-function)
    - [Arrow Function](#arrow-function)
  - [Template literals](#template-literals)
  - [Short circuiting](#short-circuiting)
    - [&& Operator](#-operator)
    - [|| operator](#-operator-1)
    - [Nullish coalescing operator](#nullish-coalescing-operator)
  - [Array Methods](#array-methods)
    - [Map](#map)
    - [Filter](#filter)
    - [Array Method Chaining](#array-method-chaining)
    - [Reduce](#reduce)
    - [Sort](#sort)
    - [Immutable Arrays](#immutable-arrays)
  - [Promises](#promises)
  - [Async/Await](#asyncawait)
- [React Fundamentals](#react-fundamentals)
  - [Inline CSS](#inline-css)
  - [Prop Passsing](#prop-passing)
  - [State](#state)
    - [Declare a State Variable](#declare-a-state-variable)
    - [Updating State](#updating-state)
    - [Tips and Guidelines](#tips-and-guidelines)
- [Unsorted and Miscellaneous Notes](#unsorted-and-miscellaneous-notes)

These are not my individual notes on how to work with Javascript and React, but more overall concepts that I think might snag me up later down the line. This document serves to be a quick reference when working with React as a new skill.

## Javascript Fundamentals

### Destructuring

```
const book = getBook(1);

const title = book.title;
const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
book;

console.log(author, title, genres);

const primaryGenre = genres[0];
const secondaryGenre = genres[1];

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
```

### Ternaries

```
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
// Condition ? if true : if false

console.log(`The book has ${pagesRange} pages`);
```

### Traditional vs. Arrow Functions

#### Traditional Function

```
function getYear(str) {
return str.split("-")[0];
}
```

#### Arrow Function

```
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));
```

### Template literals

```
const summary = `${title} is a book with ${pages} pages written by ${author} in ${getYear(
publicationDate
)}. The book has${hasMovieAdaptation ? "" : " not"} been adapted as a movie`;
summary;
```

### Short circuiting

#### && Operator

In the case of AND, the expression is evaluated until we get one false result because the result will always be false,
independent of the further conditions.

```
console.log(true && "Something");
console.log(false && "Something");
console.log(hasMovieAdaptation && "This book has a movie");
```

falsy: 0, '', null
if not falsy then truey

#### || operator

In the case of OR, the expression is evaluated until we get one true result because the result will
always be true, independent of the further conditions.

```
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;
```

Optional chaining - the little ?.property, if the ?.property is undefined or null,
the expression short circuits to undefined.

```
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
```

#### Nullish coalescing operator

The nullish coalescing (??) operator is a logical operator that returns its right-hand
side operand when its left-hand side operand is null or undefined, and otherwise
returns its left-hand side operand.

Useful for when the actual return is zero or null or something else falsey but that falsey value is still a
usable value

```
const count = book.reviews.librarything?.reviewsCount ?? "No Data!";
count;
```

### Array Methods

#### Map

Loops over an array and RETURNS A NEW ARRAY after applying some function to it.

```
const books = getBooks();
books;

const x = [1, 2, 3, 4].map((el) => el \* 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
title: book.title,
author: book.author,
}));
essentialData;
```

#### Filter

Filter out some elements of the array based on a condition

```
const longBooks = books.filter((book) => book.pages > 500);
longBooks;
```

#### Array Method Chaining

```
const longBooks = books
.filter((book) => book.pages > 500)
.filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
.filter((books) => books.genres.includes("adventure"))
.map((book) => book.title);
adventureBooks;
```

#### Reduce

Reduces the entire array into one value

Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
```

acc is the accumulator, the current value of the final value we're reducing the array down to, starts at the starting value in our case above, starter is 0.

#### Sort

Sort an array

```
const n = [10, 4, 35, 34, 79, 86, 125000, 42];
const sorted = n.sort((a, b) => a - b);
sorted;
```

a and b are the current and next value respectively, in the callback function, when you get a negative value then the two numbers are sorted in an ascending way (smallest in a largest in b), b - a is descending sort.

Sort changes the original array, however we do not usually want to mutate the data, so take a copy first.

```
const n = [10, 4, 35, 34, 79, 86, 125000, 42];
const sorted = n.slice().sort((a, b) => a - b);
sorted;
n;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

```

#### Immutable Arrays

Working with arrays without changing the source data

1.  Add a book object to array

```
const newBook = {
id: 6,
title: "Harry Potter and the Chamber of Secrets",
author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;
```

2.  Delete book object from array

```
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
```

3.  Update a book object in the array

```
const booksAfterUpdate = booksAfterDelete.map((book) =>
book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
```

### Promises

Javascript does not wait for the fetch to complete, this is called a promise.
the .then is run once the promise is fulfilled, which itself returns another promise.

```
fetch("https:jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((data) => console.log(data));

```

### Async/Await

With the await keyword in an async function, we pause the code inside the function and wait on the previous async. When calling the function the rest of the code proceeds as normal, but pausing happens inside the function.

```
async function getTodos() {
const response = await fetch("https:jsonplaceholder.typicode.com/todos");
const data = await response.json();
console.log(data);
return data;
}
getTodos();
```

if we take the output of the async function we make another promise that requires the .then methods all over again
so do all the things inside the async function rather than doing all the return and .then redundancy.

```
const todos = getTodos();
console.log(todos);
```

## React Fundamentals

### Inline CSS

Inline CSS in JSX needs two sets of curly braces:

```
<button style={{ backgroundColor: "#7590F2" }}>Previous</button>
```

### Prop Passing

Remember whenever I do prop passing like this:

```
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "beginner" && "👶"}
        {skillObject.level === "intermediate" && "👍"}
        {skillObject.level === "advanced" && "💪"}
      </span>
    </div>
  );
}
```

That Skill(skillObject) will not return anything, I need to wrap it in curly brackets inside the parens.

### State

#### Declare a State Variable

```
const [step, setStep] = useState(1);
```

The hook (second element in the array) should always be set(Something).

#### Updating State

Do not _update_ state manually like this:

```
function handlePrevious() {
    if (step > 1) setStep(step = step + 1);
  }
```

Instead create a callback function for handling state updates and pass the current value like this:

```
function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
```

This does not apply to setting state, which can be performed directly:

```
setTest({ name: "R3mnan7"});
```

#### Tips and Guidelines

Each component manages it's own state. Each component instance operates independent from the others.

Use a state variable for any data that the component should keep track of ("remember") over time. **This is data that will change at some point**. In Vanilla JS, that's a let variable, or and [] or {}.

Whenever you want something in the component to be **dynamic**, create a piece of state related to that "thing" and update the state when the "thing" should change.

**_Example_**: A modal window can be opened or closed. So we create a state variable isOpen that tracks wwhether the modal is open or not. In isOpen = true we display the window, on isOpen = false, we hide it.

If you want to change the way a component looks, or the data it displays, **update its state**. This usually happens in an **event handler** function.

When building components, imagine its view as a **reflection of state over time**.

For data that should not trigger component re-renders, **don't use state**. Use a regular variable instead.

Data can only move down the component tree, not up or sideways.

#### What's the Difference Between _State_ and _Props_?

State is internal data owned by the component, props are external data owned by the parent component.

Props are read-only, but receiving new props causes the component to re-render. Usually when the parent's state has been updated.

Whenever a piece of state is passed as a prop, when the state is changed both components re-render.

While state is used to make components interactive, props are used to give parent comopnents the ability to configure child components. Props can be seen as settings in child components which the parent component can manage.

## Unsorted and Miscellaneous Notes

When rendering an array in react, you always need to pass in a key, like this:

```
<Skill skillObject={skill} key={skill.skill} />
```

### Trick for Dynamic Array Creation

Can use this trick to create a dynamic array from a range of numbers (probably more uses).

```
<select>
  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
    <option value={num} key={num}>
      {num}
    </option>
  ))}
</select>
```

### Prevent Reload when Submitting a Form

```
  function handleSubmit(e) {
    e.preventDefault();
  }
```

### On Forms vs Buttons

Can make submitting a form easier by using onSubmit in the form rather than using onClick to submit the form, this allows hitting enter to submit rather than _just_ clicking on the button.

### Controlled Elements

By default, input fields maintain their own state inside the DOM. This makes it hard to read their values and leaves their state in the DOM, which is not ideal. In react it is better to keep state in the react app rather than the DOM, to handle this we use controlled elements.

In order to implement controlled elements, follow three steps:

1. Create a piece of state

```
const [description, setDescription] = useState
```

2. Use that state as the value of the input field

```
<input type="text" placeholder="Item..." value={description} />
```

3. Connect the state with the value being input

```
<input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Target returns the element, in our case the input, which we pull the value from.
      />
```

Another example

```
 const [quantity, setQuantity] = useState(1);

 <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
```

_e.target.value always returns a string_
