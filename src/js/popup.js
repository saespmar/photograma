let download = document.getElementById('download');

download.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelector("#react-root section div div div div div div div a").style.backgroundColor = "green";'});
  });
};