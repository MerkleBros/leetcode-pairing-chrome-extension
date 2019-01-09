// https://www.recurse.com/settings/apps
let data = {
  appTabId: undefined,
  leetCodeTabId: undefined,
  onLeetCode: false,
  authenticationCode: undefined,
  loginType: undefined
}

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  let responseFunction = sendResponse;
  
  if (message.type == "BackgroundShouldDeleteAllData"){
    data = {
      appTabId: undefined,
      leetCodeTabId: undefined,
      onLeetCode: false,
      authenticationCode: undefined,
      loginType: undefined
    }
  }

  if (message.type == "appWantsLoginType"){
    sendResponse(data.loginType);
  }

  if (message.type == "popupIsGivingBackgroundTheLoginType"){
    data.loginType = message.loginType;
    sendResponse({type: "gotLoginType"});
  }

  if (message.type == "popupIsGivingBackgroundTheLeetcodeTabId"){
    data.leetCodeTabId = message.leetCodeTabId;
    data.onLeetCode = message.onLeetCode;
    sendResponse({type: "gotTabId"});
  }

  if(message.type == "appSendingBackgroundAppTabId") {
    data.appTabId = message.appTabId;
    sendResponse({type: "gotAppTabId"});
  }

  if (message.type == "appWantsLeetCodeId"){
    sendResponse({
        leetCodeTabId: data.leetCodeTabId
      }); 
  }

  if(message.type == "appWantsAuthentication") {
    let authCode = await getAuthentication(message.serverAuthenticationUrl);
    console.log('got authcode on background.js: ' + authCode);
    data.authenticationCode = authCode;
    sendAppAuthenticationCode();
    responseFunction({
      authenticationCode: authCode
    });
  }

  if (message.type=="appWantsAuthenticationCode"){
    sendResponse({
        authenticationCode: data.authenticationCode
    }); 
  }
  return true;
});

async function getAuthentication(authUrl) {
  return new Promise(function(resolve) {
    let windowReference = undefined;
    chrome.runtime.onMessage.addListener(function(message, sender, sendReponse) {
      if(message.type == "authenticationSuccessful") {
        if(windowReference) windowReference.close();
        resolve(message.code);
      }
    });

    windowReference = window.open(authUrl);
  })
}

function sendAppAuthenticationCode() {
  chrome.runtime.sendMessage(
    {
      type: "backgroundSendingAppAuthenticationCode",
      authenticationCode: data.authenticationCode 
    },
    function(response) {
    }
  );
}