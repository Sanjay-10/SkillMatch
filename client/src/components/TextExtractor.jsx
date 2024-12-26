import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setResult, setGeminiLoading } from "../skillMatchSlice";
import Quote from 'inspirational-quotes';

/*global chrome*/
const TextExtractor = ({ buttonLabel, buttonStyle = {}, onResult }) => {

  const dispatch = useDispatch();
  const resumeText = useSelector((state) => state.skillMatch.resumeText);
  // const [extractedText, setExtractedText] = useState("");

  // WEBSITE CONTENT EXTRACTOR
  // Function to fetch and display extracted text
  const handleExtractText = () => {
    dispatch(setGeminiLoading(true));
    // console.log("handleExtractText() Fetching extracted text...");
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: "EXTRACTED_TEXT" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error communicating with background script:", chrome.runtime.lastError.message);
          // setExtractedText("Failed to extract text from page. Background script error.");
          reject("Background script error");
        } else if (response?.status === "success" && response.text) {
          // console.log("Response from background script:", response.text);
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
      dispatch(setGeminiLoading(true));
      // console.log("fetchResult() Fetching result...");
      let websiteContent = await handleExtractText();
      websiteContent = websiteContent.replace(/\s+/g, ' ').trim();
      console.log("Website content:", websiteContent);
      // console.log("Resume text:", resumeText);
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
    } finally {
      dispatch(setGeminiLoading(false));
    }
  };

  return (
    <div >
      <button onClick={() => fetchResult()} style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default TextExtractor;
