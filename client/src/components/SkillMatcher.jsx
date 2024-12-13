import React, { useState } from "react";
import { extractTextFromFile } from "../utils/resumeTextExtractor";
import TextExtractor from "./TextExtractor";
const SkillMatcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  const [extractedText, setExtractedText] = useState("");

  // Function to fetch and display extracted text
  const handleExtractText = () => {
    chrome.runtime.sendMessage({ action: "EXTRACTED_TEXT" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error communicating with background script:", chrome.runtime.lastError.message);
        setExtractedText("Failed to extract text from page. Background script error.");
      } else if (response?.status === "success" && response.text) {
        console.log("Response from background script:", response.text);
        setExtractedText(response.text); // Update state with extracted text
      } else {
        console.error("Unexpected response:", response);
        setExtractedText("Unexpected response from background script.");
      }
    });
  };

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const extractedText = await extractTextFromFile(file);
      setResumeText(extractedText);
    } catch (err) {
      setError("Failed to process file. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <TextExtractor resume={resumeText} jobDescription={extractedText} />
      <button onClick={handleExtractText}>Extract Text from Page</button>

      <div style={{ padding: "20px" }}>
        <h2>Skill Matcher</h2>
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}

      </div>
    </div>
  );
};

export default SkillMatcher;
