require("dotenv").config();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_GEMINI_KEY;
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
    const { resumeText, jobDescription } = req.body; // Get inputs from the request body
    // console.log("resumeText:", resumeText);
    // console.log("jobDescription:", jobDescription);
    const prompt = `
              Extract the following details:

              1) Extract all the professional and technical skills from the resume text provided below:
                Resume Text: ${resumeText}
                Please only extract skills from the resume. Do not mix any job description skills with the resume skills.

              2) Extract all the professional and technical skills from the job description text (you need to find highlighted job)provided below:
                Job Description: ${jobDescription}
                Please only extract skills from the job description. Do not mix any resume skills with the job description skills.

              3) Extract the following job details from the job description:
                a) Job Title
                b) Co-op Start Date
                c) Tenure (duration)
                d) Location

              Return the results in this structured JSON format:

              {
                "resumeSkills": ["skill1", "skill2", "skill3"],
                "jobDescriptionSkills": ["skill1", "skill2", "skill3"],
                "jobDetails": {
                  "Company" : "properly Company name ",
                  "jobTitle": "Job Title Here",
                  "coOpStartDate": "YYYY-MM-DD",
                  "Job duration": "like if it's 4 months or 8 months or 12 months or 16 months etc",
                  "experience": "Experience Level Here",
                  "location": "Location Here",
                  "salary":"if given";
                  "responsibilities":"like what to do in this job in 2 small lines";
                }
              }
              `;

    const chatSession = model.startChat({
      generationConfig,
      history: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const result = await chatSession.sendMessage(prompt);
    // Extract JSON from the response text (removing code block formatting)
    const jsonResponse = result.response.text().replace(/```json\n|\n```/g, "");
    const parsedResult = JSON.parse(jsonResponse);

    // Join skills side by side with commas
    parsedResult.resumeSkills = parsedResult.resumeSkills.join(", ");
    parsedResult.jobDescriptionSkills =
      parsedResult.jobDescriptionSkills.join(", ");

    res.json({ result: parsedResult });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

module.exports = { gemini };
