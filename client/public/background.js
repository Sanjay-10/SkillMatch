chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "TEXT_EXTRACTED") {
      console.log("Extracted Text: ", message.text);
      sendResponse({ status: "success", receivedText: message.text });
    } else if (message.action === "EXTRACTED_TEXT") {
      // Pass a message to content.js to extract visible text
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: () => {
              const hostname = window.location.hostname;
  
              if (hostname.includes("linkedin")) {
                // LinkedIn specific extraction
                const jobDetails = document.querySelector(".jobs-search__job-details--wrapper");
                return jobDetails ? jobDetails.innerText : "No job details found on LinkedIn.";
              } else if (hostname.includes("glassdoor") || hostname.includes("glassdoor.ca")) {
                // Glassdoor specific extraction
                const jobDetails = document.querySelector(".TwoColumnLayout_jobDetailsContainer__qyvJZ");
                return jobDetails ? jobDetails.innerText : "No job details found on Glassdoor.";
              } else if (hostname.includes("indeed") || hostname.includes("indeed.ca")) {
                // Indeed specific extraction
                const jobDetails1 = document.querySelector("#job-full-details");
                const jobDetails2 = document.querySelector("#jobsearch-ViewjobPaneWrapper");
                if (jobDetails1) return jobDetails1.innerText;
                if (jobDetails2) return jobDetails2.innerText;
                return "No job details found on Indeed.";
              } else {
                // Default to entire body content for other pages
                return document.body.innerText;
              }
            },
          },
          (results) => {
            if (results && results[0]) {
              sendResponse({ status: "success", text: results[0].result });
            } else {
              sendResponse({ status: "error", message: "Failed to extract text" });
            }
          }
        );
      });
      return true; // Keep the message port open
    }
  });
  