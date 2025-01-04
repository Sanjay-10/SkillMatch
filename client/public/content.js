// Listen for messages from the webpage
window.addEventListener("message", (event) => {
    if (event.source !== window || !event.data.type) return;
  
    if (event.data.type === "FROM_REACT_APP") {
      chrome.runtime.sendMessage(
        { action: "getData", uniqueId: event.data.uniqueId },
        (response) => {
          if (response && response.success) {
            // Send data back to the webpage
            window.postMessage(
              { type: "FROM_CONTENT_SCRIPT", data: response.data },
              "*"
            );
          }
        }
      );
    }
  });
  