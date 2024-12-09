import  { useState } from "react";
import { extractTextFromFile } from "../utils/textExtractor";

const SkillMatcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const extractedText = await extractTextFromFile(file);
      setResumeText(extractedText);

      // Process the text to extract skills using a hypothetical API
      const response = await fetch("/extract-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: extractedText }),
      });
      const data = await response.json();
      setSkills(data.skills);
    } catch (err) {
      setError("Failed to process file. Please try again.");
      console.error(err);
    }
  };

return (
    <div style={{ padding: "20px" }}>
        <h2>Skill Matcher</h2>
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
            <h3>Extracted Text:</h3>
            <textarea rows="10" value={resumeText} readOnly style={{ width: "100%" }} />
        </div>
        <div>
            <h3>Extracted Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default SkillMatcher;
