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