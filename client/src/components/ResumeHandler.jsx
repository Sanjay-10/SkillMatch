import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeText, setFileName } from "../skillMatchSlice";
import { extractTextFromFile } from "../utils/resumeTextExtractor";

const ResumeHandler = ({ labelStyle = {}, buttonStyle = {} }) => {
  const dispatch = useDispatch();
  const { resumeText, fileName } = useSelector((state) => state.skillMatch);

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
      dispatch(setResumeText(text));
      dispatch(setFileName(name));
    }
  }, [dispatch]);

  // Extract text from uploaded file and save text + file name
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      const extractedText = await extractTextFromFile(file);
      dispatch(setResumeText(extractedText));
      dispatch(setFileName(file.name));
      saveResumeToLocalStorage(extractedText, file.name);
    } catch (err) {
      console.error("Failed to process file. Please try again.", err);
    }
  };

  const truncateFileName = (name, maxLength = 40) => {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  };

  // Use useEffect to log the updated resume text when it changes
  useEffect(() => {
    console.log("Uploaded Resume Text:", resumeText); // Log updated resumeText
  }, [resumeText]); // Only log when resumeText changes

  return (
    <div style={{ padding: "15px" }}>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileUpload}
        style={{ display: "none" }} // Hide the file input
        id="fileInput"
      />
      {fileName && <p style={buttonStyle}>{truncateFileName(fileName)}</p>}
      <label
        htmlFor="fileInput"
        className="text-xs font-medium text-blue-900 hover:underline hover:font-bold"
        style={{ cursor: "pointer", ...labelStyle }}
      >
        Change Resume
      </label>
    </div>
  );
};

export default ResumeHandler;
