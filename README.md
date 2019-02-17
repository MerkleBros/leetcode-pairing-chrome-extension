# Leetcode Pairing Chrome Extension
A Chrome extension for pairing on Leetcode problems.

Live version: https://chrome.google.com/webstore/detail/leetcode-pairing/jeonpfbokpeagbojffcijgpcpldgebfb

### Motivation
This browser extension was created as a way to allow Recursers (www.recurse.com) to continuing pair programming after their batch ended. It allows users to pair on LeetCode.com coding interview/algorithm problems from anywhere in the world, using a shared code editor and real-time video chat, all in the browser.

### Technologies
Front End - React, WebRTC, Chrome API, Oauth2, CodeMirror API
Back End - Node + Express, Socket.io

### Instructions

To pair on a Leetcode problem of your choosing:

1.Navigate to: https://leetcode.com/problems/yourProblem

2. Click the "Pair on my LeetCode Problem" button to enter the lobby.

3. Chat with the other users until you find a partner interested in pairing with you. When you are both ready to begin pairing, they should click the "Pair With Me" button next to your user name.

4. You will automatically be taken back to Leetcode and the pairing session will begin. Make sure to select "allow access to microphone and camera" to enable video chat.

To help someone else with a LeetCode problem of their choosing:

1. Click on the "Help Others With Their LeetCode Problem" button to enter the lobby.

2. Chat with the other users until you find a partner interested in pairing with you. When you are both ready to begin pairing, click the "Pair With Me" button next to their user name.

3. You will be taken to the pairing code editor and the pairing session will begin. Make sure to select "allow access to the microphone and camera" to enable video chat.

For Recursers: select the "Login Type: RC" button to enable login through your Recurse Center account. This will allow others to see your name and photo.

To log out: simply close the browser tab/window when you are done pairing and you will be automatically logged out.

### Run
- Clone the repo
- `npm install`
- `npm run start`
