const WEBSOCKET_URL='http://localhost:5000/';

function connectSocket(){
    socket = io.connect(WEBSOCKET_URL);
    socket.on('connected', function(msg) {
      console.log("socket connected")
    });
}

connectSocket();


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



let notesBox=addNotesBox();

function addNotesBox(){
  let textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'notesBox');
  textArea.setAttribute('cols',55);
  textArea.setAttribute('rows', 4);
  textArea.setAttribute('style','position: fixed; z-index: 1000;top: 0px;');
  document.querySelector('body').appendChild(textArea);
  return textArea;
}
