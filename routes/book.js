const express = require("express");
const {
  getAllBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);

router.get("/:bookId", getBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
