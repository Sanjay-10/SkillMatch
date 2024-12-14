import React, { useState, useEffect } from "react";
import { extractTextFromFile } from "../utils/resumeTextExtractor";
import TextExtractor from "./TextExtractor";

const SkillMatcher = () => {

  const [resumeText, setResumeText] = useState("");
  const [error, setError] = useState("");

    // Function to save resume text to local storage
    const saveResumeToLocalStorage = (text) => {
      localStorage.setItem("resumeText", text);
    };

      // Function to get resume text from local storage
  const getResumeFromLocalStorage = () => {
    return localStorage.getItem("resumeText") || "";
  };

    // On component mount, load resume text from local storage
    useEffect(() => {
      const storedResumeText = getResumeFromLocalStorage();
      if (storedResumeText) {
        setResumeText(storedResumeText);
      }
    }, []);

  // Function to extract text from pdf/docx file  
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const extractedText = await extractTextFromFile(file);
      setResumeText(extractedText);
      saveResumeToLocalStorage(extractedText);
    } catch (err) {
      setError("Failed to process file. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <TextExtractor resume={resumeText} />

      <div style={{ padding: "20px" }}>
        <h2>Skill Matcher..</h2>
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}

      </div>
    </div>
  );
};

export default SkillMatcher;
