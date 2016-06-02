

function initAskWidgetTemplate(){
	var loginTmplString = TEMPLATES['ask-tmpl.html'];
	var wrapper = document.createElement('div');
		wrapper.id = "docnme-ask-widget";
		document.getElementsByTagName('body')[0].appendChild(wrapper);

		wrapper.innerHTML = loginTmplString;
}

function initAskModal(){
	var dialogWrapper = document.getElementById('docnme-ask-widget');
	var dialog = dialogWrapper.querySelector('dialog');
	var showDialogButton = document.querySelector('[data-trigger-widget="ask"]');
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

function initAskWidgetScroll(){
	var attachment = document.querySelector('[attachment]');
		attachment.addEventListener('click', function(){
			var attach = this.querySelector('input[type="file"]');
				attach.click();
		});

	var askDialog = document.querySelector('.ask-dialog');
	var steps = document.querySelectorAll('[step]');
	var smoothScrollInverval, stepScrollLimit, isScrollFinished;
	
	Array.prototype.forEach.call(steps, function(eachStep){
		eachStep.addEventListener('click', function(){
			stepScrollLimit = this.getAttribute('step');
			isScrollFinished = false;
			smoothScrollInverval = setInterval(function(){
				if (askDialog.scrollTop >= parseInt(stepScrollLimit, 10)) {
					clearInterval(smoothScrollInverval);
					isScrollFinished = true;
				}
				askDialog.scrollTop += 5;

				// Pollyfills to set the exact scroll
				if (isScrollFinished) {
					askDialog.scrollTop = stepScrollLimit;
				}
			}.bind(this), 5);
			
		})
	});
}


document.addEventListener("DOMContentLoaded", function(event) {

	if (!window.isMaterialLibLoaded) {
		addMaterialLibraries();
	}
	
	initAskWidgetTemplate();

	// This need to be called manually because this event gets called
	// by material design's componentHandler on window load and in our 
	// case window is already loaded
	var interval = setInterval(function(){
		if (window.componentHandler) {
			componentHandler.upgradeAllRegistered();
			clearInterval(interval);
		}		
	}, 10);
	
	initAskModal();
	initAskWidgetScroll();
});

