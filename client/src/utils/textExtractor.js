import mammoth from "mammoth";

export const extractTextFromFile = async (file) => {
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
  formData.append("file", file); // Ensure this name matches the server's expected field name

  try {
    const response = await fetch("http://localhost:5000/extract", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to extract text: ${response.statusText}`);
    }

    // Assuming the server sends plain text
    const data = await response.text();
    return data; // Return the extracted text
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
