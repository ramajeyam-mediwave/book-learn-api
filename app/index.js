const express = require("express");
const morgan = require("morgan");
const { getAllBooks, addBook } = require("./db");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/books", (req, res) => {
  const books = getAllBooks();
  res.send(books);
});

app.post("/books", (req, res) => {
  const book = addBook({
    title: req.body.title,
    isbn: req.body.isbn,
  });
  res.send(book);
});

app.listen(4567, () => {
  console.log("Server running on 4567");
});
