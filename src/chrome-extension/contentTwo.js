  let codeText = document.body.textContent
  if(codeText) {
    chrome.runtime.sendMessage(
        {
          type: "authenticationSuccessful",
          code: codeText
        },
      function (response){
      }
    );
  }