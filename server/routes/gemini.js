const router = require("express").Router();

const { gemini } = require("../controllers/gemini");

router.post("/result", gemini);

module.exports = router;