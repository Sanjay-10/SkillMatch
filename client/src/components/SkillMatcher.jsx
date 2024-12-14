import React, { useState, useEffect } from "react";
import { extractTextFromFile } from "../utils/resumeTextExtractor";
import TextExtractor from "./TextExtractor";

const SkillMatcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [fileName, setFileName] = useState(""); // State for file name
  const [error, setError] = useState("");

  // Save resume text and file name to local storage
  const saveResumeToLocalStorage = (text, name) => {
    localStorage.setItem("resumeText", text);
    localStorage.setItem("resumeFileName", name); // Save file name
  };

  // Retrieve resume text and file name from local storage
  const getResumeFromLocalStorage = () => {
    return {
      text: localStorage.getItem("resumeText") || "",
      name: localStorage.getItem("resumeFileName") || "", // Retrieve file name
    };
  };

  // On component mount, load resume text and file name from local storage
  useEffect(() => {
    const { text, name } = getResumeFromLocalStorage();
    if (text) {
      setResumeText(text);
      setFileName(name); // Set file name if available
    }
  }, []);

  // Extract text from uploaded file and save text + file name
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      const extractedText = await extractTextFromFile(file);
      setResumeText(extractedText);
      setFileName(file.name); // Save uploaded file's name
      saveResumeToLocalStorage(extractedText, file.name);
    } catch (err) {
      setError("Failed to process file. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <TextExtractor resume={resumeText} />

      <div style={{ padding: "20px" }}>
        <h2>Skill Matcher</h2>
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        {fileName && <p>Uploaded File: {fileName}</p>} {/* Display file name */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SkillMatcher;
