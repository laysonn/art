window.addEventListener('DOMContentLoaded', function() {


	let modals = require('../parts/modals.js'),
		accordion = require('../parts/accordion.js'),
		blockfilter = require('../parts/blockfilter.js'),
		blockloader = require('../parts/blockloader.js'),
		calc = require('../parts/calc.js'),
		forms = require('../parts/forms.js'),
		hamburgermenu = require('../parts/hamburgermenu.js'),
		imghover = require('../parts/imghover.js'),
		sliders = require('../parts/sliders.js');

	
	accordion();
	blockfilter();
	blockloader();
	calc();
	forms();
	hamburgermenu();
	imghover();
	modals();
	sliders();


});


