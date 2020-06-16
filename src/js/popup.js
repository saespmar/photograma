let download = document.getElementById('download');

download.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      {file: "js/change.js"});
  });
};