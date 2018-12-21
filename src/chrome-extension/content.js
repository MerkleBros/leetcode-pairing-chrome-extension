console.log('content.js loaded')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("content.js got message "+ JSON.stringify(request));
  sendResponse();
})


