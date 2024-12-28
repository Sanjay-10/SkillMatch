import mammoth from "mammoth";

export const extractTextFromFile = async (file) => {
  console.log(file.name);
  const fileType = file.name.split(".").pop().toLowerCase();
  if (fileType === "pdf") {
    return await extractTextFromPDF(file);
  } else if (fileType === "docx") {
    return await extractTextFromDocx(file);
  } else {
    throw new Error("Unsupported file type");
  }
};


const extractTextFromPDF = async (file) => {
  const formData = new FormData();
  formData.append("file", file); 
  try {
    const response = await fetch("http://localhost:5000/pdfExtractor/extract", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Failed to extract text: ${response.statusText}`);
    }
    const data = await response.text();
    return data; 
  } catch (error) {
    console.error("Error extracting text:", error.message);
    throw error;
  }
};
  
  
const extractTextFromDocx = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const { value } = await mammoth.extractRawText({ arrayBuffer });
  return value;
};
