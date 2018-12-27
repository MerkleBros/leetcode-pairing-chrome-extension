document.getElementById("start-pairing").addEventListener('click', () => startApp());

// 	chrome.runtime.sendMessage({foo:"hi I'm popup.js. What's your name?"}, 
// 	 	function(response) {
// 	// 	//	console.log(response.farewell);
// 	});

async function startApp() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		chrome.runtime.sendMessage(
		  {
		  	type: "popupIsGivingBackgroundTheLeetcodeTabId",
		   	leetCodeTabId: tabs[0].id
		  },
		  function(response){
		  	if (response.type=="gotTabId"){
		  		chrome.tabs.create({"url": "index.html"});
		  	}
		  }
		);
	});
}