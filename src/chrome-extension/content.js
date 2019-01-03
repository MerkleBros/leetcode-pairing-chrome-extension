const data = {
  problem:undefined,
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
  authenticationCode: undefined
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type == "requestProblemData"){
		sendResponse(data); 
  }
});

// data.problem={
//   title:document.querySelector("div[data-key='description-content'] > div > div > div").innerText,
//   difficulty:document.querySelector("div[data-key='description-content'] > div >div>div:nth-child(2)>div").innerText,
//   description: document.querySelector("div[data-key='description-content'] > div > div:nth-child(2)").innerText
// }
// console.log(data.problem)

let getProblemDataLoop = setInterval(function(){
  console.log('loop')
  if (document.querySelector("div[data-key='description-content'] > div > div > div").innerText!=null){
    data.problem={
      title:document.querySelector("div[data-key='description-content'] > div > div > div").innerText,
      difficulty:document.querySelector("div[data-key='description-content'] > div >div>div:nth-child(2)>div").innerText,
      description: document.querySelector("div[data-key='description-content'] > div > div:nth-child(2)").innerText
      language: document.querySelector("#lang-select > div > div > div.ant-select-selection-selected-value").innerText
    }
    console.log(data.problem)
    clearInterval(getProblemDataLoop)
  }
  else{
    console.log('else')
  }
},500)