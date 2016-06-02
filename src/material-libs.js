


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

