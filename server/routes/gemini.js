const router = require("express").Router();

const { gemini } = require("../controllers/gemini");

router.post("/gemini", gemini);

module.exports = router;