// var Peer = require('simple-peer')

// get video/voice stream
navigator.getUserMedia({ video: true, audio: true }, gotMedia, function (e) {
  console.log(e)
})

function gotMedia (stream) {

  var p = new SimplePeer({ initiator: location.hash === '#1', stream: stream })

  p.on('error', function (err) { console.log('error', err) })


  // Fired when the peer (you) wants to send signaling data to the remote peer.
  // It is the responsibility of the application developer (that's you!) 
  // to get this data to the other peer. 
  // This usually entails using a websocket signaling server. 
  // This data is an Object, so remember to 
  // call JSON.stringify(data) to serialize it first. 
  // Then, simply call peer.signal(data) on the remote peer.
  // (Be sure to listen to this event immediately to avoid missing it. 
  // For initiator: true peers, it fires right away. 
  // For initatior: false peers, it fires when the remote offer is received.)
  p.on('signal', function (data) {
    console.log('SIGNAL', JSON.stringify(data))
    document.querySelector('#outgoing').textContent = JSON.stringify(data)
  })

  document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault()

  // Call this method whenever the remote peer emits a peer.on('signal') event.
  // The data will encapsulate a webrtc offer, answer, or ice candidate. 
  // These messages help the peers to eventually establish a direct connection 
  // to each other. The contents of these strings are an implementation detail 
  // that can be ignored by the user of this module; simply pass the data from
  // 'signal' events to the remote peer and call peer.signal(data) to get connected.
  //What I think they really mean:
  //call this method when you receive an answer/offer from the remote peer.
  // pass the answer/offer into the method.
    p.signal(JSON.parse(document.querySelector('#incoming').value))
  })

  p.on('connect', function () {
    console.log('CONNECT')
    p.send('whatever' + Math.random())
  })

  p.on('data', function (data) {
    console.log('data: ' + data)
  })

  p.on('stream', function (stream) {
    // got remote video stream, now let's show it in a video tag
    var video = document.querySelector('video')
    video.src = window.URL.createObjectURL(stream)
    video.play()
  })
}