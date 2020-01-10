let elementPicker = document.getElementById('elementPicker');
let injection = document.getElementById('injection');

elementPicker.onclick = (element) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "element_picker"});
  });
}

injection.onclick = (element) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
}