document.getElementById("start-pairing").addEventListener('click', () => startApp());

// 	chrome.runtime.sendMessage({foo:"hi I'm popup.js. What's your name?"}, 
// 	 	function(response) {
// 	// 	//	console.log(response.farewell);
// 	});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//    		console.log('got it!');
//  		});
// });

async function startApp() {

	await chrome.tabs.create({"url": "index.html"});
	//getLeetcodeData()
}