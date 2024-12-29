const router = require("express").Router();

const { extension, detailedOverview } = require("../controllers/gemini");
const { coverLetter } = require("../controllers/coverLetter");

router.post("/extension", extension);
router.post("/detailedOverview", detailedOverview);
router.post("/coverLetter", coverLetter);

module.exports = router;
