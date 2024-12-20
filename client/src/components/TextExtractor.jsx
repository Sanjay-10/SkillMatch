import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../skillMatchSlice";

/*global chrome*/
const TextExtractor = ({ buttonLabel = "Analyze", buttonStyle = {}, onResult }) => {

  const dispatch = useDispatch();
  const resumeText = useSelector((state) => state.skillMatch.resumeText);
  // const [extractedText, setExtractedText] = useState("");

  // WEBSITE CONTENT EXTRACTOR
  // Function to fetch and display extracted text
  const handleExtractText = () => {
    // console.log("handleExtractText() Fetching extracted text...");
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: "EXTRACTED_TEXT" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error communicating with background script:", chrome.runtime.lastError.message);
          // setExtractedText("Failed to extract text from page. Background script error.");
          reject("Background script error");
        } else if (response?.status === "success" && response.text) {
          console.log("Response from background script:", response.text);
          // setExtractedText(response.text); // Update state with extracted text
          resolve(response.text);
        } else {
          console.error("Unexpected response:", response);
          // setExtractedText("Unexpected response from background script.");
          reject("Unexpected response");
        }
      });
    });
  };

  // Function to fetch result from server
  const fetchResult = async () => {
    try {
      // console.log("fetchResult() Fetching result...");
      const websiteContent = await handleExtractText();
      // console.log("Website content:", websiteContent);
      const response = await fetch('http://localhost:5000/gemini/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeText: resumeText, jobDescription: websiteContent }),
      });
      const data = await response.json();
      dispatch(setResult(data.result));
      console.log("Result:", data.result);  
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchResult()} style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default TextExtractor;
