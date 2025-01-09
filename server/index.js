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
app.use(cors()); 
app.use(helmet()); // Add security headers
app.use(morgan("common")); // Log HTTP requests
require("dotenv").config();

// Multer configuration
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// Use routes
app.use("/pdfExtractor", upload.single("file"), pdfParserRoutes);
app.use("/gemini", geminiRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/test", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('<h1>Test String</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
