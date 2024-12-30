const express = require("express");
const multer = require("multer");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const pdfParserRoutes = require("./routes/pdfParser");
const geminiRoutes = require("./routes/gemini");

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: "https://skill-match-dashboard.vercel.app" })); 
app.use(helmet()); // Add security headers
app.use(morgan("common")); // Log HTTP requests

// Multer configuration
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage });

// Use routes
app.use("/pdfExtractor", upload.single("file"), pdfParserRoutes);
app.use("/gemini", geminiRoutes);


const key = process.env.GOOGLE_API_KEY;
app.get("/", (req, res) => {
  res.status(200).send(`key: ${key}`);

});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
