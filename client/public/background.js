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
          func: () => document.body.innerText,
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
