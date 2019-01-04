const NOT_ON_LEETCODE_REGEX = /^(?!https\:\/\/(www\.)?leetcode\.com\/problems\/).*$/
let pairOnMineButton = document.getElementById("pair-on-mine");
let pairOnOthersButton = document.getElementById("pair-on-others");

pairOnMineButton.addEventListener('click', () => startApp());
pairOnOthersButton.addEventListener('click', () => openLobby());

let globalTabs = undefined;

disablePairOnMine();

onLeetCode().then(function(isOnLeetCode) {
	if (isOnLeetCode) enablePairOnMine();
});

function promptContentScriptToGetProblemData() {
	chrome.tabs.sendMessage(
		globalTabs[0].id, 
		{type: "promptContentScriptToGetProblemData"}
	);
}

async function onLeetCode() {
	let tabs = await new Promise(function(resolve) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			resolve(tabs);
		});
	});
	globalTabs = tabs;
	if (!NOT_ON_LEETCODE_REGEX.test(tabs[0].url)) {return true;}
	return false;
}

async function waitForContentToGetProblemData() {
	promptContentScriptToGetProblemData();
	return new Promise(function(resolve, reject) {
		chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
			if (message.type === "contentScriptHasProblemData"){
				resolve(true)
			}
			if (message.type === "contentScriptDoesNotHaveProblemData") {
				resolve(false)
			}
		});
	});
}

async function startApp() {
	document.getElementById("refreshMessage").innerText = "Retrieving problem data...";
	let hasData = await waitForContentToGetProblemData();
	if (hasData) {
		sendBackgroundLeetCodeTab();
	}
	else {
		document.getElementById("refreshMessage").innerText = "Unable to get problem data, refresh LeetCode and try again."
	}
}

function disablePairOnMine() {
	pairOnMineButton.disabled = true;
}
function enablePairOnMine() {
	pairOnMineButton.disabled = false;
}

function sendBackgroundLeetCodeTab() {
	chrome.runtime.sendMessage(
	  {
	  	type: "popupIsGivingBackgroundTheLeetcodeTabId",
	   	leetCodeTabId: globalTabs[0].id,
	   	onLeetCode: true
	  },
	  function(response){
	  	if (response.type=="gotTabId"){
	  		openLobby();
	  	}
	  }
	);
}

function openLobby() {
	chrome.tabs.create({"url": "index.html"});
}