const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error(
      "You must use the 'new' operator to call the constructor and This is test",
    );
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      this.title + " by " + this.author + ", " + this.pages + ", " + this.read,
    );
  };
}

const theError = Book("Test", "Zack", "1page", "not read");

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkein",
  "295 pages",
  "not read yet",
);

theError.info();

theHobbit.info();
