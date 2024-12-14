import React, { useState } from 'react';
/*global chrome*/
const TextExtractor = ({ resume, jobDescription }) => {
  const [extractedText, setExtractedText] = useState("");
  const [result, setResult] = useState('');

  // Function to fetch and display extracted text
  const handleExtractText = () => {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: "EXTRACTED_TEXT" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error communicating with background script:", chrome.runtime.lastError.message);
          setExtractedText("Failed to extract text from page. Background script error.");
          reject("Background script error");
        } else if (response?.status === "success" && response.text) {
          console.log("Response from background script:", response.text);
          setExtractedText(response.text); // Update state with extracted text
          resolve(response.text);
        } else {
          console.error("Unexpected response:", response);
          setExtractedText("Unexpected response from background script.");
          reject("Unexpected response");
        }
      });
    });
  };

  // Function to fetch result from server
  const fetchResult = async (resume) => {
    try {
      const text = await handleExtractText();

      const response = await fetch('http://localhost:5000/gemini/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeText: resume, jobDescription: text }),
      });
      const data = await response.json();
      setResult(data.result);
      return data;
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  return (
    <div>
      <h2>Result</h2>
      <button onClick={() => fetchResult(resume)}>Result</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default TextExtractor;
