const router = require("express").Router();
const { parsePdf } = require("../controllers/pdfParser");

router.post("/extract", parsePdf);

module.exports = router;
