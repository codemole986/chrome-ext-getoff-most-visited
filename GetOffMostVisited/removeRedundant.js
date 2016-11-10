

function chrome_extension_getoffMostVisited_removeTags() {

	var tags = ['form', 'div', 'span'];
	for (var p=0; p<tags.length; p++) {

		var elems = document.getElementsByTagName(tags[p]);
    	for (var i=0; i<elems.length; i++) {
    		elems[i].remove();	
    	}
	}
}




// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'clear_new_tab') {

  		chrome.storage.sync.get({
  			showOpts: {'mngb':true, 'lga':true, 'form':true},
  		}, function(items) {
  			var keys = ['mngb', 'lga', 'form'];
  			for (var i=0; i<keys.length; i++) {

  				if (items['showOpts'][keys[i]]) {

  					var assignClassName = "chrome_extension_getoffMostVisited_show_" + keys[i];
  					if (document.body.className.indexOf(assignClassName) < 0) {
  			    		document.body.className += " " + assignClassName;	
  			    	}

  				}
  			}
  		});

    	var assignClassName = "chrome_extension_getoffMostVisited";
    	if (document.body.className.indexOf(assignClassName) < 0) {
    		document.body.className += " " + assignClassName;	
    	}
    	
    	// chrome_extension_getoffMostVisited_removeTags();
    	// setInterval(chrome_extension_getoffMostVisited_removeTags, 100);
    	
    }
});




