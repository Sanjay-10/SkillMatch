import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeText,
  setFileName,
  setResumeLoading,
} from "../skillMatchSlice";
import { extractTextFromFile } from "../utils/resumeTextExtractor";

const ResumeHandler = ({ labelStyle = {}, title ,buttonStyle = {} }) => {
  const dispatch = useDispatch();
  const { resumeText, fileName, resumeLoading } = useSelector(
    (state) => state.skillMatch
  );

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
      dispatch(setResumeLoading(true));
      const file = event.target.files[0];
      if (!file) return;

      const extractedText = await extractTextFromFile(file);
      const cleanedText = extractedText.replace(/\s+/g, " ").trim();
      dispatch(setResumeText(cleanedText));
      dispatch(setFileName(file.name));
      saveResumeToLocalStorage(extractedText, file.name);
    } catch (err) {
      console.error("Failed to process file. Please try again.", err);
    } finally {
      dispatch(setResumeLoading(false));
    }
  };

  const truncateFileName = (name, maxLength = 30) => {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  };

  // Use useEffect to log the updated resume text when it changes
  useEffect(() => {
    // Log updated resumeText
  }, [resumeText]); // Only log when resumeText changes

  return (
    <div style={{ padding: "15px 0" }}>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileUpload}
        style={{ display: "none" }} // Hide the file input
        id="fileInput"
      />
      {resumeLoading ? (
        <p style={{ ...buttonStyle, textAlign: "center", }}>Loading...</p>
      ) : (
        fileName && <p style={buttonStyle}>{truncateFileName(fileName)}</p>
      )}

      {fileName ? (
        <div className="mt-2">
          <label
            htmlFor="fileInput"
            className="text-[14px]  font-medium text-blue-900 hover:underline hover:font-bold"
            style={{
              display: resumeLoading ? "none" : "",
              cursor: "pointer",
              ...labelStyle,
            }}
          >
            {title}
          </label>
        </div>
      ) : (
        <label
          htmlFor="fileInput"
          className="text-[16px]  font-medium text-blue-900 hover:underline "
          style={{
            display: resumeLoading ? "none" : "",
            cursor: "pointer",
          
            ...labelStyle,
          }}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default ResumeHandler;
