require('dotenv').config();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_GEMINI_KEY;
console.log("apiKey", apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const gemini = async (req, res) => {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            { text: "Hello world\n" },
          ],
        },
        {
          role: "model",
          parts: [
            { text: "Hello world!\n" },
          ],
        },
      ],
    });

    const userInput = req.body.input || "INSERT_INPUT_HERE"; // Fetch input from request body or use default
    const result = await chatSession.sendMessage(userInput);

    res.json({ result: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};


module.exports = { gemini };
