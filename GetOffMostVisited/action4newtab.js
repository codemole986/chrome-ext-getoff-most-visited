
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}


function customizeNewTab() {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    
    if (tabs.length < 1) return;

    var tab = tabs[0];
    var url = tab.url;


    if ((url.indexOf('chrome://newtab') > -1) || (url.indexOf('chrome://search') > -1)) {
      if (true || tab.status.toLowerCase() == 'complete') {

        chrome.tabs.sendMessage(tab.id, {text: 'clear_new_tab'}, doStuffWithDom);

        /*
        // https://www.google.com.tw/_/chrome/newtab?espv=2&ie=UTF-8

        chrome.tabs.executeScript(null, {
            code: 'var is_new_tab = true'
        }, function() {
            chrome.tabs.executeScript(null, {file: 'removeRedundant.js'});
        });

        // alert("Yes!!!");
        */

      }
    }

  });


}

chrome.tabs.onUpdated.addListener(customizeNewTab);

/*
document.addEventListener('DOMContentLoaded', function() {
    customizeNewTab();
});
*/

