// /**
//  * Extracts all visible text from the DOM of the current webpage.
//  * @returns {string} Extracted text from the page.
//  */
// export const extractTextFromPage = () => {
//     console.log("Extracting text from the page...");
//     const body = document.body;
//     let textContent = "";
  
//     function getTextFromNode(node) {
//       if (node.nodeType === Node.TEXT_NODE) {
//         textContent += node.textContent.trim() + " ";
//       } else if (node.nodeType === Node.ELEMENT_NODE) {
//         if (!["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "META", "LINK"].includes(node.tagName)) {
//           const style = getComputedStyle(node);
//           if (style && style.display !== "none" && style.visibility !== "hidden") {
//             for (const child of node.childNodes) {
//               getTextFromNode(child);
//             }
//           }
//         }
//       }
//     }
  
//     getTextFromNode(body);
//     return textContent.trim();
//   };
  