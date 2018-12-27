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

console.log("content.js loaded")

// //works
// setInterval(function(){
//  chrome.runtime.sendMessage({data: "Hello app, how are you"});
// },500)


// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log('app got message from content')
//     sendResponse({
//         data: "I am fine, thank you. How is life in the background?"
//     }); 
// });
// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//   	console.log("got a request")
//   	if (request.senderPage=="app" && request.message=="giveMeProblemData"){
//   		console.log("got request from app for problem data")
//   		chrome.extension.sendRequest({senderPage:"leetCode",message:"problemData",data:data})
//   		console.log("sent problem data to app")
//   	}
// });
