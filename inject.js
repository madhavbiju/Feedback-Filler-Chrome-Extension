// this is the code which will be injected into a given page...

(function() {
for(let i=0; i<50; i++){
	var buttons = document.getElementsByName(`right${i}`);
	if(buttons[0]){
		buttons[0].checked = true;	
	}
}
document.querySelector('input[value="Submit"]').disabled = false;
})();
