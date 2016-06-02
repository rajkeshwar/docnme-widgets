

function initLoginWidget(){
	var loginTmplString = TEMPLATES['login-tmpl.html'];
	var wrapper = document.createElement('div');
		wrapper.id = "docnme-login-widget";
		document.getElementsByTagName('body')[0].appendChild(wrapper);

		wrapper.innerHTML = loginTmplString;
}

function initLoginModal(){
	
	var dialogWrapper = document.getElementById('docnme-login-widget');
	var dialog = dialogWrapper.querySelector('dialog');
	var showDialogButton = document.querySelector('[data-trigger-widget="login"]');
	if (! dialog.showModal) {
	  dialogPolyfill.registerDialog(dialog);
	}
	showDialogButton.addEventListener('click', function() {
	  dialog.showModal();
	});
	dialog.querySelector('.close').addEventListener('click', function() {
	  dialog.close();
	});
}


document.addEventListener("DOMContentLoaded", function(event) {
	
	if (!window.isMaterialLibLoaded) {
		addMaterialLibraries();
	}
	
	initLoginWidget();

	// This need to be called manually because this event gets called
	// by material design's componentHandler on window load and in our 
	// case window is already loaded
	var interval = setInterval(function(){
		if (window.componentHandler) {
			componentHandler.upgradeAllRegistered();
			clearInterval(interval);
		}		
	}, 10);
	
	initLoginModal();
});



