const { v4: uuidv4 } = require("uuid");
const { isValidISBN } = require("./Validation/ISBN_validation");

const books = [
  {
    id: 1234,
    title: "Naruto",
    isbn: "007462542X",
  },
];

const getAllBooks = () => books;
const addBook = ({ title, isbn }) => {
  if (isValidISBN(isbn)) {
    const id = uuidv4();
    const b = {
      id,
      title,
      isbn,
    };
    books.push(b);
    return b;
  } else console.log("Invalid");
};
module.exports = {
  getAllBooks,
  addBook,
};
