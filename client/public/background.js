const temporaryData = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "TEXT_EXTRACTED") {
    sendResponse({ status: "success", receivedText: message.text });
  } else if (message.action === "EXTRACTED_TEXT") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: () => {
              try {
                const hostname = window.location.hostname;

                if (hostname.includes("linkedin")) {
                  const jobDetails = document.querySelector(
                    ".jobs-search__job-details--wrapper"
                  );
                  return jobDetails
                    ? jobDetails.innerText
                    : "No job details found on LinkedIn.";
                } else if (hostname.includes("glassdoor")) {
                  const jobDetails = document.querySelector(
                    ".TwoColumnLayout_jobDetailsContainer__qyvJZ"
                  );
                  return jobDetails
                    ? jobDetails.innerText
                    : "No job details found on Glassdoor.";
                } else if (hostname.includes("indeed")) {
                  const jobDetails1 = document.querySelector(
                    "#job-full-details"
                  );
                  const jobDetails2 = document.querySelector(
                    "#jobsearch-ViewjobPaneWrapper"
                  );
                  if (jobDetails1) return jobDetails1.innerText;
                  if (jobDetails2) return jobDetails2.innerText;
                  return "No job details found on Indeed.";
                } else if (hostname.includes("workday")) {
                  const jobDetails = document.querySelector(
                    '[data-automation-id="jobDetails"]'
                  );
                  return jobDetails
                    ? jobDetails.innerText
                    : "No job details found on Workday.";
                } else {
                  return document.body.innerText;
                }
              } catch (error) {
                return `Error extracting text: ${error.message}`;
              }
            },
          },
          (results) => {
            if (results && results[0]) {
              sendResponse({ status: "success", text: results[0].result });
            } else {
              sendResponse({
                status: "error",
                message: "Failed to extract text",
              });
            }
          }
        );
      } else {
        sendResponse({ status: "error", message: "No active tab found" });
      }
    });
    return true; // Keep the message channel open
  }

  if (message.action === "storeData") {
    const { uniqueId, data } = message;
    chrome.storage.local.set({ [uniqueId]: data }, () => {
      if (chrome.runtime.lastError) {
        sendResponse({ success: false, error: chrome.runtime.lastError });
      } else {
        sendResponse({ success: true });
      }
    });
    return true; // Keep the channel open
  }

  if (message.action === "getData") {
    const { uniqueId } = message;
    chrome.storage.local.get(uniqueId, (result) => {
      if (chrome.runtime.lastError || !result[uniqueId]) {
        sendResponse({ success: false });
      } else {
        sendResponse({ success: true, data: result[uniqueId] });
      }
    });
    return true; // Keep the channel open
  }
});
