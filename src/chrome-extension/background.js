chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://leetcode.com/problems/' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

let data = {
  leetCodeTabId: undefined
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type=="popupIsGivingBackgroundTheLeetcodeTabId"){
    data.leetCodeTabId=message.leetCodeTabId;
    sendResponse({type: "gotTabId"});
  }

  if (message.type=="appWantsLeetCodeId"){
    sendResponse({
          leetCodeTabId: data.leetCodeTabId
      }); 
  }
});