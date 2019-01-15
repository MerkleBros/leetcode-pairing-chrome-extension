console.log('content started')

//const WEBSOCKET_URL='http://localhost:5000/';
//connectSocket();

const data = {
  offer:undefined,
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
    
  navigator.getUserMedia({ video: true, audio: true }, gotMedia, function (e) {});

  if (message.type == "appSendsContentOffer"){
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

      startLeetCodeObserverScript();

      clearInterval(getProblemDataLoop)
      resolve(problem)
     }
   },500)
  });
}

//let notesBox=addNotesBox();

function addNotesBox(){
  let textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'notesBox');
  textArea.setAttribute('cols',55);
  textArea.setAttribute('rows', 4);
  textArea.setAttribute('style','position: fixed; z-index: 1000;top: 0px;');
  document.querySelector('body').appendChild(textArea);
  return textArea;
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


var p
function gotMedia (stream) {
  
  p = new SimplePeer({ initiator: false, stream: stream })

  p.on('error', function (err) { console.log('error', err) })

  p.on('signal', function (answer) {
    chrome.runtime.sendMessage({"type":"contentSendsAppAnswer","answer":answer})
  })

  //p.signal(data.offer)
  
  p.on('connect', function () {
    p.send('whatever' + Math.random())
  })

  p.on('stream', function (stream) {
    // got remote video stream, now let's show it in a video tag
    // let audioChat = document.createElement('audio');
    // audioChat.src = window.URL.createObjectURL(stream)
    // audioChat.play()
  //video
    var video = document.createElement('video');
    video.srcObject = stream
    document.body.appendChild(video);
    video.play()
  })
}