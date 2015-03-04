// Now we've configured RequireJS, we can load our dependencies and start
define([ 'jquery','bootstrap','track'], function (jquery, bootstrap,track) {



    $(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})      

});
