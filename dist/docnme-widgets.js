if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['ask-tmpl.html'] = "<dialog class=\"mdl-dialog ask-dialog\">	    \n" +
    "    <div class=\"mdl-dialog__content ask_content\">	\n" +
    "	    <div class=\"ask-step-one\">\n" +
    "	    	<h4 class=\"mdl-dialog__title ask-dialog_title\">Ask a question?</h4>\n" +
    "	    	<form action=\"#\">\n" +
    "			  <div class=\"mdl-textfield mdl-js-textfield ask-textfield\">\n" +
    "			    <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"5\"></textarea>\n" +
    "			    <label class=\"mdl-textfield__label\" for=\"sample5\">Text lines...</label>\n" +
    "			  </div>\n" +
    "			</form>\n" +
    "			<button class=\"mdl-button mdl-js-button mdl-button--icon\" attachment>\n" +
    "			  <input type=\"file\" name=\"attachment\" class=\"ask__attachment\">\n" +
    "			  <i class=\"material-icons\">attach_file</i>\n" +
    "			</button>\n" +
    "			<div class=\"mdl-dialog__actions ask__actions\">\n" +
    "		      <button class=\"mdl-button mdl-js-button mdl-button--icon\" step=\"334\">\n" +
    "			  	<i class=\"material-icons\">send</i>\n" +
    "			  </button>\n" +
    "		    </div>\n" +
    "	    </div><!-- ask-step-one -->        \n" +
    "	</div><!-- mdl-dialog__content ask_content -->\n" +
    "    <div class=\"ask-step-three\">\n" +
    "    	<!-- Always shows a header, even in smaller screens. -->\n" +
    "		<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n" +
    "		  <header class=\"mdl-layout__header\">\n" +
    "		    <div class=\"mdl-layout__header-row\">\n" +
    "		      <!-- Title -->\n" +
    "		      <span class=\"mdl-layout-title\">Title</span>\n" +
    "		      <!-- Add spacer, to align navigation to the right -->\n" +
    "		      <div class=\"mdl-layout-spacer\"></div>\n" +
    "		      <!-- Navigation. We hide it in small screens. -->\n" +
    "		      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n" +
    "		        <!-- <a class=\"mdl-navigation__link\" href=\"\">Link</a> -->\n" +
    "		      </nav>\n" +
    "		    </div>\n" +
    "		  </header>\n" +
    "		  <div class=\"mdl-layout__drawer\">\n" +
    "		    <span class=\"mdl-layout-title\">Title</span>\n" +
    "		    <nav class=\"mdl-navigation\">\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		    </nav>\n" +
    "		  </div>\n" +
    "		  <main class=\"mdl-layout__content\">\n" +
    "		    <div class=\"page-content\">\n" +
    "		    	<!-- Your content goes here -->\n" +
    "			    	<div class=\"left-logo\">\n" +
    "			    		<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored logo\">\n" +
    "						  <i class=\"material-icons\">add</i>\n" +
    "						</button>\n" +
    "			    	</div>\n" +
    "					<div class=\"right-content\">\n" +
    "						<h4>Dr. Aditya Agarwal</h4>\n" +
    "						<h5>Hyderabad</h5>\n" +
    "					</div>	\n" +
    "		    	</div>\n" +
    "		  </main>\n" +
    "		</div>\n" +
    "		<div class=\"step-next\">\n" +
    "	      <button step=\"650\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored footer-btn\">\n" +
    "		  	<i class=\"material-icons\">send</i>\n" +
    "		  </button>\n" +
    "	    </div>\n" +
    "    </div><!-- ask-step-three -->\n" +
    "    <div class=\"mdl-dialog__content ask_content\">  \n" +
    "    	<div class=\"ask-step-two\">\n" +
    "	    	<h4 class=\"mdl-dialog__title ask-dialog_title\">Please sign in</h4>\n" +
    "	    	<!-- Textfield with Floating Label -->\n" +
    "			<form action=\"#\" class=\"ask-login__dialog\">\n" +
    "			  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "			    <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\">\n" +
    "			    <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n" +
    "			  </div>\n" +
    "			  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "			    <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\">\n" +
    "			    <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n" +
    "			  </div>\n" +
    "			</form>\n" +
    "			<button step=\"980\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n" +
    "			  	<i class=\"material-icons\">send</i> Sign In\n" +
    "			</button>\n" +
    "	    </div><!-- ask-step-two -->\n" +
    "    </div>\n" +
    "    <div class=\"ask-step-four\">\n" +
    "    	<!-- Always shows a header, even in smaller screens. -->\n" +
    "		<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n" +
    "		  <header class=\"mdl-layout__header\">\n" +
    "		    <div class=\"mdl-layout__header-row\">\n" +
    "		      <!-- Title -->\n" +
    "		      <span class=\"mdl-layout-title\">Title</span>\n" +
    "		      <!-- Add spacer, to align navigation to the right -->\n" +
    "		      <div class=\"mdl-layout-spacer\"></div>\n" +
    "		      <!-- Navigation. We hide it in small screens. -->\n" +
    "		      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n" +
    "		        <!-- <a class=\"mdl-navigation__link\" href=\"\">Link</a> -->\n" +
    "		      </nav>\n" +
    "		    </div>\n" +
    "		  </header>\n" +
    "		  <div class=\"mdl-layout__drawer\">\n" +
    "		    <span class=\"mdl-layout-title\">Title</span>\n" +
    "		    <nav class=\"mdl-navigation\">\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n" +
    "		    </nav>\n" +
    "		  </div>\n" +
    "		  <main class=\"mdl-layout__content\">\n" +
    "		    <div class=\"page-content\">\n" +
    "		    	<!-- Your content goes here -->\n" +
    "		    	<div class=\"table-wrapper\">\n" +
    "		    		<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n" +
    "					  <tbody>\n" +
    "					    <tr>\n" +
    "					      <td class=\"mdl-data-table__cell--non-numeric\">Request reply within</td>\n" +
    "					      <td>6 Hrs</td>\n" +
    "					      <td>(450 INR)</td>\n" +
    "					    </tr>\n" +
    "					    <tr>\n" +
    "					      <td class=\"mdl-data-table__cell--non-numeric\">Request reply within</td>\n" +
    "					      <td>2 Hrs</td>\n" +
    "					      <td>(600 INR)</td>\n" +
    "					    </tr>\n" +
    "					    <tr>\n" +
    "					      <td class=\"mdl-data-table__cell--non-numeric\">Payment Gateway</td>\n" +
    "					      <td colspan=\"2\">PayTm</td>\n" +
    "					    </tr>\n" +
    "					  </tbody>\n" +
    "					</table>\n" +
    "		    	</div>				    					\n" +
    "		    </div>\n" +
    "		  </main>\n" +
    "		  <div class=\"confirm-block\">\n" +
    "		      <button class=\"mdl-button mdl-js-button mdl-button--raised close\">\n" +
    "				  Cancel\n" +
    "			  </button>\n" +
    "			  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">\n" +
    "				  Confirm\n" +
    "			  </button>\n" +
    "		    </div>\n" +
    "		</div>				\n" +
    "    </div><!-- ask-step-four -->\n" +
    "        \n" +
    "</dialog>"; 
if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['login-tmpl.html'] = "<dialog class=\"mdl-dialog login-dialog\">	    \n" +
    "    <div class=\"mdl-dialog__content\">	\n" +
    "	    <div class=\"login-tab\">\n" +
    "	    	<div class=\"mdl-tabs mdl-js-tabs mdl-js-ripple-effect\">\n" +
    "			  <div class=\"mdl-tabs__tab-bar login-reg__tab\">\n" +
    "			      <a href=\"#login-panel\" class=\"mdl-tabs__tab is-active\">Login</a>\n" +
    "			      <a href=\"#register-panel\" class=\"mdl-tabs__tab\">Register</a>\n" +
    "			  </div>\n" +
    "\n" +
    "			  <div class=\"mdl-tabs__panel is-active\" id=\"login-panel\">\n" +
    "\n" +
    "			    <form action=\"#\" class=\"login__dialog\">\n" +
    "				  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n" +
    "				  </div>\n" +
    "				  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n" +
    "				  </div>\n" +
    "				</form>\n" +
    "				<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" step=\"660\">\n" +
    "				  	<i class=\"material-icons\">send</i> Sign In\n" +
    "				</button>\n" +
    "			  </div>\n" +
    "			  <div class=\"mdl-tabs__panel\" id=\"register-panel\">    \n" +
    "			    <form action=\"#\" class=\"login__dialog\">\n" +
    "			      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"text\" id=\"fullname\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"fullname\">Fullname</label>\n" +
    "				  </div>\n" +
    "				  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n" +
    "				  </div>\n" +
    "				  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n" +
    "				  </div>\n" +
    "				  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n" +
    "				    <input class=\"mdl-textfield__input\" type=\"email\" id=\"email\">\n" +
    "				    <label class=\"mdl-textfield__label\" for=\"email\">Email</label>\n" +
    "				  </div>\n" +
    "				</form>\n" +
    "				<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored close\">\n" +
    "				  	<i class=\"material-icons\">send</i> Register\n" +
    "				</button>\n" +
    "			  </div>\n" +
    "\n" +
    "			</div>\n" +
    "	    </div><!-- ask-step-one -->\n" +
    "        \n" +
    "	</div><!-- mdl-dialog__content ask_content -->\n" +
    "</dialog>"; 


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







;(function(){

	var cssCDNLinks = [
		'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.3/material.css',
		'https://fonts.googleapis.com/icon?family=Material+Icons'
	];

	var jsCDNLinks = [
		'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.3/material.js'
	];

	var _isMaterialLibLoaded = false;
	function addMaterialLibraries(){
		
		var firstScript = document.getElementsByTagName('script')[0],

		linkCssToDocument = function( cssLinkUrl ){
			var cssLinkElement = document.createElement('link'); 
			 	cssLinkElement.type = 'text/css'; 
			 	cssLinkElement.rel = 'stylesheet';
			    cssLinkElement.href = cssLinkUrl;

		    	firstScript.parentNode.insertBefore(cssLinkElement, firstScript);
		},
		linkJsToDocument = function( jsLinkUrl ){
			var jsLinkElement = document.createElement('script'); 
			 	jsLinkElement.type = 'text/javascript'; 
			 	jsLinkElement.async = false;
			    jsLinkElement.src = jsLinkUrl;

			    firstScript.parentNode.insertBefore(jsLinkElement, firstScript);
		}
		
		for (var i = 0; i < cssCDNLinks.length; i++) {
			linkCssToDocument(cssCDNLinks[i]);
		}

		for (var i = 0; i < jsCDNLinks.length; i++) {
			linkJsToDocument(jsCDNLinks[i]);
		}

		_isMaterialLibLoaded = true;
	}

	addMaterialLibraries();

	window['addMaterialLibraries'] = addMaterialLibraries;
	window['isMaterialLibLoaded'] = _isMaterialLibLoaded;

}());

