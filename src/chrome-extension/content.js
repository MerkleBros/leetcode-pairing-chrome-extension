const data = {
  problem:{title:"Easy Problem",
           difficulty:"easy",
           number: 666,
           description: 'Determine if NP=P'
          },
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type == "requestProblemData"){
		sendResponse(data); 
	}
});

console.log("content is working")
let description= document.getElementsByClassName("__PY_Q")
console.log("description: "+JSON.stringify(description))