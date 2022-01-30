const db = require('../model/stormDB');

const getAll = (req, res) => {
  const books = db.get('books').value() || [];
  res.status(200).send(books);
};

const create = (req, res) => {
  const book = req.body;

  db.get('books').push(book).save();

  res.status(201).send({
    success: 'ok',
  });
};

const getByID = (req, res) => {
  const id = req.params.id;

  const books = db.get('books').value();
  const book = books.filter((book) => book.id == id);

  res.status(200).send(book);
};

const updateByID = (req, res) => {
  const id = req.params.id;
  const book = req.body;

  const books = db.get('books').value();
  const bookIndex = books.findIndex((book) => book.id == id);
  db.get('books').get(bookIndex).set(book).save();

  res.status(204).send({
    success: 'ok',
  });
};

const deleteByID = (req, res) => {
  const id = req.params.id;

  db.get('books')
    .filter((book) => book.id != id)
    .save();

  res.status(200).send({
    success: 'ok',
  });
};

module.exports = {
  getAll,
  create,
  getByID,
  updateByID,
  deleteByID,
};
