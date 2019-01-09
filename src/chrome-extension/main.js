let codeMirrorValue='';

function setCodeMirrorObserver(){
  let mirrorObject = document.getElementsByClassName('CodeMirror')[0].CodeMirror
  let targetNode = document.getElementsByClassName('CodeMirror')[0];
  console.log(targetNode)
  var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true //Omit or set to false to observe only changes to the parent node.
  }

  var observer = new MutationObserver(function(){
    let newValue= mirrorObject.getValue()
    if (newValue != codeMirrorValue){
      //send new value to partner
      codeMirrorValue = newValue;
      console.log(codeMirrorValue)
    }
  });

  observer.observe(targetNode, observerOptions);
}

setCodeMirrorObserver()