const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  issueBook,
  getAllIssuedBooks,
  returnBook,
} = require("../controllers/issueController");

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllIssuedBooks);
router.post("/issue", issueBook);
router.post("/return", returnBook);

module.exports = router;
