// function extractVisibleText() {
//     const allElements = Array.from(document.body.querySelectorAll("*"));
//     return allElements
//       .filter(
//         (el) =>
//           el.offsetParent !== null && // Not hidden with display:none
//           getComputedStyle(el).visibility !== "hidden" // Not visibility:hidden
//       )
//       .map((el) => el.innerText.trim())
//       .filter((text) => text.length > 0) // Exclude empty strings
//       .join("\n");
//   }
  
//   const extractedText = extractVisibleText();
//   chrome.runtime.sendMessage({ type: "TEXT_EXTRACTED", text: extractedText });
  