console.log('content started')

var p
navigator.getUserMedia({ video: true, audio: true }, gotMedia, function (e) {});
//const WEBSOCKET_URL='http://localhost:5000/';
//connectSocket();

const data = {
  offer:undefined,
  problem:undefined,
  authenticationCode: undefined
};

let resultsButton,submitButton

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  if (message.type == "appWantsProblemData"){
    sendResponse(data.problem); 
  }
    

  if (message.type == "appSendsContentOffer"){
    talkingDiv.setAttribute('contentrequest','requestInitialCode');
    p.signal(message.offer)
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

  if (message.type == "appSendingContentCodeChange"){
    talkingDiv.setAttribute("contentrequest", "codeChange");
    talkingDiv.setAttribute("contentmessage", message.code);
  }
  
  if (message.type == "partnerKilled"){
    p.destroy();
    navigator.getUserMedia({ video: true, audio: true }, gotMedia, function (e) {});
    alert("Partner Disconnected.")
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
     
      resultsButton = document.querySelector("[id='code-area'] > :nth-child(3) > :nth-child(2) > :nth-child(1)")
      submitButton = document.querySelector("[id='code-area'] > :nth-child(3) > :nth-child(2) > :nth-child(2)")

      resultsButton.addEventListener('click',function(){
        getResults('results')
      })
      submitButton.addEventListener('click',function(){
        getResults('submit')
      })

      startLeetCodeObserverScript();

      clearInterval(getProblemDataLoop)
      resolve(problem)
    }
   },500)
  });
}

function getResults(type){
  let counter = 0;
  let currentType=type;
  let getResultsLoop = setInterval(function(){
    counter++;
    if(counter > 60)clearInterval(getResultsLoop)
    //results
    if (currentType=='results' && document.querySelector("[data-key='runcode-result-content']").innerText){
      chrome.runtime.sendMessage({
        type: "contentSendsAppResults",
        text: document.querySelector("[data-key='runcode-result-content']").innerText
      });
      clearInterval(getResultsLoop)
    }
    //submit    
    if (currentType=='submit' && document.querySelector("[data-key='submissions-content']> :nth-child(1)> :nth-child(1)> :nth-child(1)> :nth-child(1)").innerText){
      chrome.runtime.sendMessage({
        type: "contentSendsAppResults",
        text: document.querySelector("[data-key='submissions-content']> :nth-child(1)> :nth-child(1)> :nth-child(1)> :nth-child(1)").innerText
      });
      clearInterval(getResultsLoop)
    }
  },500)
}




let talkingDiv = document.createElement('div');

function startLeetCodeObserverScript(){

  talkingDiv.setAttribute("id","talkingDiv");
  talkingDiv.setAttribute("contentrequest", "");
  talkingDiv.setAttribute("contentmessage", "");
  talkingDiv.setAttribute("leetcoderequest", "");
  talkingDiv.setAttribute("leetcodemessage", "");
  document.body.appendChild(talkingDiv);

  let script = document.createElement('script');
  script.setAttribute("type", "module");
  script.setAttribute("src", chrome.runtime.getURL('leetCodeReadWrite.js'));
  const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  head.insertBefore(script, head.lastChild);


  //listen to div
  var observerOptions = {attributes: true}

  var observer = new MutationObserver(function(){
      if (talkingDiv.getAttribute('leetcoderequest')=="codeChange"){
        talkingDiv.setAttribute('leetcoderequest', '');
        chrome.runtime.sendMessage({
          type: "contentSendingAppCodeChange",
          code: talkingDiv.getAttribute('leetcodemessage')
        });
      }
  });

  observer.observe(talkingDiv, observerOptions);
}


function gotMedia (stream) {
  
  p = new SimplePeer({ initiator: false, stream: stream })

  p.on('error', function (err) { console.log('error', err) })

  p.on('signal', function (answer) {
    chrome.runtime.sendMessage({"type":"contentSendsAppAnswer","answer":answer})
  })

  p.on('stream', function (stream) {
    //video
    var video = document.createElement('video');
    video.style.width = "120px";
    video.style.height = "120px";
    video.style.position = "fixed";
    video.style.top = "0";

    video.srcObject = stream
    document.body.appendChild(video);
    video.play()
  })
}

window.onunload = function () {
  p.destroy()
  chrome.runtime.sendMessage({type: "leetCodeTabClosed"});
};







//let notesBox=addNotesBox();

// function addNotesBox(){
//   let textArea = document.createElement('textarea');
//   textArea.setAttribute('id', 'notesBox');
//   textArea.setAttribute('cols',55);
//   textArea.setAttribute('rows', 4);
//   textArea.setAttribute('style','position: fixed; z-index: 1000;top: 0px;');
//   document.querySelector('body').appendChild(textArea);
//   return textArea;
// }
