function setNotOnLeetCode() {
  data.onLeetCode = false;
}
function setOnLeetCode() {
  data.onLeetCode = true;
}

let data = {
  leetCodeTabId: undefined,
  onLeetCode: false
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type=="popupIsGivingBackgroundTheLeetcodeTabId"){
    data.leetCodeTabId=message.leetCodeTabId;
    data.onLeetCode = message.onLeetCode;
    sendResponse({type: "gotTabId"});
  }

  if (message.type=="appWantsLeetCodeId"){
    sendResponse({
          leetCodeTabId: data.leetCodeTabId
      }); 
  }
});