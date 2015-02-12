// Now we've configured RequireJS, we can load our dependencies and start
define([ 'jquery','bootstrap'], function (jquery, bootstrap) {



    $(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})      

});
