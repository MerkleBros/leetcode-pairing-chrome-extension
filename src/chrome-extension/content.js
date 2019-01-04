const data = {
  problem:undefined,
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
  authenticationCode: undefined
};
//TODO:DELETE partner

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
	if (message.type == "appWantsProblemData"){
		sendResponse(data.problem); 
  }
  if (message.type == "promptContentScriptToGetProblemData"){
    data.problem = await getProblemData();
    if(data.problem) {
      chrome.runtime.sendMessage({type: "contentScriptHasProblemData"});
    }
    else {
      chrome.runtime.sendMessage({type: "contentScriptDoesNotHaveProblemData"});
    }
  }
});

function getProblemData() {
 return new Promise(function(resolve, reject) {
   let counter = 0;
   let getProblemDataLoop = setInterval(function(){
     counter++;
     if(counter > 20) {
       resolve(undefined)
       return;
      }
     if (document.querySelector("div[data-key='description-content'] > div > div > div").innerText!=null){
       let problem = {
         title:document.querySelector("div[data-key='description-content'] > div > div > div").innerText,
         difficulty:document.querySelector("div[data-key='description-content'] > div >div>div:nth-child(2)>div").innerText,
         description: document.querySelector("div[data-key='description-content'] > div > div:nth-child(2)").innerText,
         language: document.querySelector("#lang-select > div > div > div.ant-select-selection-selected-value").innerText
       }
       console.log("Content script received problem data: ");
       console.log(problem);
       clearInterval(getProblemDataLoop)
       resolve(problem)
     }
   },500)
  });
}