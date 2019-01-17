let codeMirrorValue='';
let talkingDiv = document.getElementById("talkingDiv")
let mirrorObject = document.getElementsByClassName('CodeMirror')[0].CodeMirror
let mirrorDOM = document.getElementsByClassName('CodeMirror')[0];

function setCodeMirrorObserver(){
  //if I type something send messsage to content
  mirrorObject.on('change', () => {
    let newValue= mirrorObject.getValue();
    if (newValue!=codeMirrorValue){
      console.log('I typed something')
      codeMirrorValue=newValue
      talkingDiv.setAttribute("leetcoderequest", "codeChange");
      talkingDiv.setAttribute("leetcodemessage", newValue);
    }
  });
}

function setTalkingDivObserver(){
  var observerOptions = {attributes: true}
  var observer = new MutationObserver(function(){
  //update code mirror if I get a message from content
    if ((talkingDiv.getAttribute('contentrequest')=="codeChange")
    &&(codeMirrorValue!=talkingDiv.getAttribute('contentmessage'))){
      console.log('partner typed something')
      talkingDiv.setAttribute('contentrequest','');
      codeMirrorValue=talkingDiv.getAttribute('contentmessage');
      //debugger;
      mirrorObject.setValue(codeMirrorValue)
    }
    if (talkingDiv.getAttribute('contentrequest')=="requestInitialCode"){
      talkingDiv.setAttribute('contentrequest','');
      talkingDiv.setAttribute("leetcoderequest", "codeChange");
      talkingDiv.setAttribute("leetcodemessage", mirrorObject.getValue());
    }


  });

  observer.observe(talkingDiv, observerOptions);
}

setTalkingDivObserver()
setCodeMirrorObserver()
console.log('read write loaded')