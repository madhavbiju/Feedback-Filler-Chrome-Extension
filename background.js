// this is the background code...

// listen for our browerAction to be clicked
chrome.action.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.scripting.executeScript({
	  target: {tabId: tab.id},
	  files: ['inject.js']
	});
});
