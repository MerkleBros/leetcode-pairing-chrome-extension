const NOT_ON_LEETCODE_REGEX = /^(?!https\:\/\/(www\.)?leetcode\.com\/problems\/).*$/
let pairOnMineButton = document.getElementById("pair-on-mine");
let pairOnOthersButton = document.getElementById("pair-on-others");

pairOnMineButton.addEventListener('click', () => startApp());
pairOnOthersButton.addEventListener('click', () => openLobby());

onLeetCode().then(function(isOnLeetCode) {
	if (isOnLeetCode) enablePairOnMine();
	else disablePairOnMine();
});

async function onLeetCode() {
	let tabs = await new Promise(function(resolve) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			resolve(tabs);
		});
	});
	if (!NOT_ON_LEETCODE_REGEX.test(tabs[0].url)) {return true;}
	return false;
}

async function startApp() {
	sendBackgroundLeetCodeTab();
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
	   	leetCodeTabId: tabs[0].id,
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