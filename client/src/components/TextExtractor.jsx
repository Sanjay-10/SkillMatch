import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setResult, setGeminiLoading, setResumeError, setJobDescription } from "../skillMatchSlice";

/*global chrome*/
const TextExtractor = ({ buttonLabel, buttonStyle = {} }) => {

  const dispatch = useDispatch();
  const {resumeText, geminiLoading} = useSelector((state) => state.skillMatch);

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
      dispatch(setJobDescription(websiteContent));
      // console.log("Website content:", websiteContent);
      // console.log("Resume text:", resumeText);
      const response = await fetch('https://skillmatch-server.vercel.app/gemini/extension', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeText: resumeText, jobDescription: websiteContent }),
      });
      const data = await response.json();

      dispatch(setResult(data.result));
      dispatch(setGeminiLoading(false));
      // console.log("Result:", data.result);  

    } catch (error) {
      dispatch(setResult(error.message));
      dispatch(setResumeError(true));
      dispatch(setGeminiLoading(false));
      setTimeout(() => {
        dispatch(setResumeError(false));
      }, 3000);

    } finally {
      dispatch(setGeminiLoading(false));
      setTimeout(() => {
        dispatch(setResumeError(false));
      }, 3000);

    }
  };

  return (
    <div >
      <button disabled={geminiLoading}  onClick={() => fetchResult()} style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default TextExtractor;
