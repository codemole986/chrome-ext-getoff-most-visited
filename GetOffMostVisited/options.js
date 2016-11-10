// Saves options to chrome.storage
function save_options() {

  var keys = ['mngb', 'lga', 'form'];
  var opts = new Object();
  for (var i=0; i<keys.length; i++) {
    opts[keys[i]] = document.getElementById('show_' + keys[i]).checked;
  }

  

  chrome.storage.sync.set({
    showOpts: opts
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    showOpts: {'mngb':true, 'lga':true, 'form':true},
  }, function(items) {

    var keys = ['mngb', 'lga', 'form'];
    for (var i=0; i<keys.length; i++) {
      document.getElementById('show_' + keys[i]).checked = items['showOpts'][keys[i]];
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);