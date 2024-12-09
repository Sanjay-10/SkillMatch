const PdfParse = require("pdf-parse");

const parsePdf = async (req, res) => {
  console.log("Request received");
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const dataBuffer = req.file.buffer; // Multer makes the file available in req.file
    const result = await PdfParse(dataBuffer); // Parse the PDF
    console.log("PDF parsed successfully"); 
    res.send(result.text);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error parsing PDF");
  }
};

module.exports = { parsePdf };
