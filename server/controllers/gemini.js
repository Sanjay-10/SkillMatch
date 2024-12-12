const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBpkNaJe2fFscSw7cogf_E7TTiN7moNa60");

const gemini = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `List a few popular movies name using this JSON schema:

    Movie = {'Name': string}
    Return: Array<Recipe>`;

    const result = await model.generateContent(prompt);
    const response = result.response.text(); 

    res.json({ recipes: response }); 
  } catch (error) {
    console.error("Error:", error); 
    res.status(500).json({ error: "Failed to generate recipes" }); 
  }
};

module.exports = { gemini };