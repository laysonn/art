(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{"../parts/accordion.js":2,"../parts/blockfilter.js":3,"../parts/blockloader.js":4,"../parts/calc.js":5,"../parts/forms.js":6,"../parts/hamburgermenu.js":7,"../parts/imghover.js":8,"../parts/modals.js":9,"../parts/sliders.js":10}],2:[function(require,module,exports){
function accordion() {
	var accordionHeading = document.getElementsByClassName('accordion-heading'),
	    accordionBlock = document.getElementsByClassName('accordion-block');

	var _loop = function _loop(i) {
		accordionHeading[i].addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				for (var _i = 0; _i < accordionHeading.length; _i++) {
					accordionHeading[_i].classList.remove('active');
				}
				this.classList.add('active');
				accordionBlock[i].classList.remove('is-paused');
			}
		});
	};

	for (var i = 0; i < accordionHeading.length; i++) {
		_loop(i);
	}
}

module.exports = accordion;
},{}],3:[function(require,module,exports){
function filter() {
	var allWorks = document.getElementsByClassName('all'),
	    portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
	    noPortfolio = document.getElementsByClassName('portfolio-no')[0];

	allWorks.onclick = function () {
		for (var i = 1; i < allWorks.length; i++) {
			allWorks.style.display = 'block';
		}
	};

	portfolioMenu.onclick = function (event) {
		var nameOfClass = event.target.className;
		activeEl = document.getElementsByClassName(nameOfClass);
		noPortfolio.style.display = 'none';

		for (var i = 1; i < allWorks.length; i++) {
			allWorks[i].style.display = 'none';
		}

		for (var _i = 0; _i < 7; _i++) {
			portfolioMenu.children[_i].classList.remove('active');
		}

		for (var _i2 = 0; _i2 < activeEl.length; _i2++) {
			activeEl[0].classList.add('active');
			activeEl[_i2].style.display = 'block';
			activeEl[_i2].classList.add('animated', 'zoomIn');
			activeEl[0].classList.remove('animated', 'zoomIn');
		}

		if (activeEl.length == 1) {
			noPortfolio.style.display = 'block';
			noPortfolio.classList.add('animated', 'fadeIn');
		} else if (activeEl.length == 0) {
			allWorks[0].classList.add('active');
			for (var _i3 = 1; _i3 < allWorks.length; _i3++) {
				allWorks[_i3].style.display = 'block';
			}
		}
	};
}

module.exports = filter;
},{}],4:[function(require,module,exports){
function blockLoad() {
	var StylesImg = document.querySelectorAll('.styles-2'),
	    loadMoreBtn = document.getElementsByClassName('button-styles')[0];

	loadMoreBtn.addEventListener('click', function () {
		for (var i = 0; i < StylesImg.length; i++) {
			StylesImg[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			StylesImg[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'zoomIn');
			loadMoreBtn.style.display = 'none';
		}
	});
}

module.exports = blockLoad;
},{}],5:[function(require,module,exports){
function calc() {
	var size = document.querySelector('#size'),
	    material = document.querySelector('#material'),
	    addition = document.querySelector('#options'),
	    promoCode = document.getElementsByClassName('promocode')[0],
	    totalPrice = document.getElementsByClassName('calc-price')[0],
	    sizeVal = 0,
	    materialVal = 0,
	    additionVal = 0;

	totalPrice.innerHTML = 0;

	if (size.value == 'Выберите размер картины' && material.value == 'Выберите материал картины' || size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
		totalPrice.innerHTML = 0;
	}

	size.addEventListener('change', function () {
		sizeVal = size.value;
		if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	material.addEventListener('change', function () {
		materialVal = material.value;
		if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	addition.addEventListener('change', function () {
		additionVal = addition.value;
		if (addition.value != 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (addition.value != 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else if (addition.value == 'Дополнительные услуги' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal) * 0.7;
		} else if (addition.value == 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal;
		}
	});

	promoCode.addEventListener('change', function () {
		if (promoCode.value == 'IWANTPOPART' && size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины') {
			totalPrice.innerHTML *= 0.7;
		} else if (addition.value == 'Дополнительные услуги') {
			totalPrice.innerHTML = +sizeVal + +materialVal;
		} else if (size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
			totalPrice.innerHTML = 0;
		} else {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		}
	});
}

module.exports = calc;
},{}],6:[function(require,module,exports){
function forms() {
	// Главная форма

	var message = new Object();
	message.loading = "Загрузка...";
	message.success = "Форма успешно отправлена!";
	message.failure = "Что то пошло не так...";

	var form = document.getElementsByClassName('bottom-form')[0],
	    input = form.getElementsByClassName('consult-form'),
	    statusMessage = document.createElement('div');

	form.addEventListener('submit', function (event) {
		statusMessage.classList.add('status');
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
				setTimeout(function () {
					statusMessage.style.display = 'none';
				}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					statusMessage.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage.innerHTML = message.failure;
				statusMessage.style.color = '#e74c3c';
				setTimeout(function () {
					statusMessage.style.display = 'none';
				}, 5000);
			}
		};

		for (var i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очистка полей ввода
		}
	});

	// Форма обратного звонка

	var form1 = document.getElementsByClassName('callForm')[0],
	    input1 = form1.getElementsByClassName('callInput'),
	    statusMessage1 = document.createElement('div');

	form1.addEventListener('submit', function (event) {
		statusMessage1.classList.add('status-small');
		event.preventDefault();
		form1.appendChild(statusMessage1);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form1);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage1.innerHTML = message.loading;
				setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage1.innerHTML = message.success;
					statusMessage1.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage1.innerHTML = message.failure;
				statusMessage1.style.color = '#e74c3c';
				setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
			}
		};

		for (var i = 0; i < input1.length; i++) {
			input1[i].value = "";
			// Очистка полей ввода
		}
	});

	// Форма заказать дизайн портрета

	var form2 = document.getElementsByClassName('design-form')[0],
	    input2 = form2.getElementsByClassName('design-input'),
	    statusMessage2 = document.createElement('div');

	form2.addEventListener('submit', function (event) {
		statusMessage2.classList.add('status-small');
		event.preventDefault();
		form2.appendChild(statusMessage2);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form2);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage2.innerHTML = message.loading;
				setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage2.innerHTML = message.success;
					statusMessage2.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage2.innerHTML = message.failure;
				statusMessage2.style.color = '#e74c3c';
				setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
			}
		};

		for (var i = 0; i < input2.length; i++) {
			input2[i].value = "";
			// Очистка полей ввода
		}
	});

	// Маска номера телефона

	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
			var range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	}

	function mask(event) {
		var matrix = "+38-(___)-___-____",
		    i = 0,
		    def = matrix.replace(/\D/g, ""),
		    val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function (a) {
			return (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			);
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = "";
		} else setCursorPosition(this.value.length, this);
	};

	var phoneMask = document.getElementsByClassName("phone-mask");

	for (var i = 0; i < phoneMask.length; i++) {
		phoneMask[i].addEventListener("input", mask, false);
		phoneMask[i].addEventListener("focus", mask, false);
		phoneMask[i].addEventListener("blur", mask, false);
	}

	// Можно ввести только русские буквы

	var inputRu = document.getElementsByClassName('input-ru');

	var _loop = function _loop(_i) {
		inputRu[_i].addEventListener('keypress', function () {
			setTimeout(function () {
				var res = /[^а-я А-Я ]/g.exec(inputRu[_i].value);
				inputRu[_i].value = inputRu[_i].value.replace(res, '');
			}, 0);
		});
	};

	for (var _i = 0; _i < inputRu.length; _i++) {
		_loop(_i);
	}
}

module.exports = forms;
},{}],7:[function(require,module,exports){
function menu() {
	var burgerBtn = document.getElementsByClassName('burger')[0],
	    burgerMenu = document.getElementsByClassName('burger-menu')[0],
	    body = document.getElementsByTagName('body')[0];

	if (window.matchMedia('(max-width: 768px)').matches) {
		var clicked = 2;
		burgerBtn.onclick = function () {
			if (clicked % 2 == 0) {
				burgerMenu.style.display = 'block';
				clicked++;
			} else if (clicked % 2 != 0) {
				burgerMenu.style.display = 'none';
				clicked++;
			}
		};
	}

	body.onresize = function () {
		if (window.matchMedia('(min-width: 768px)').matches) {
			burgerMenu.style.display = 'none';
		}
	};
}

module.exports = menu;
},{}],8:[function(require,module,exports){
function imgHover() {
	var imgBlock = document.getElementsByClassName('sizes-block'),
	    realImg = document.getElementsByClassName('realImg'),
	    sizes = document.getElementsByClassName('sizes')[0];

	if (window.matchMedia('(min-width: 768px)').matches) {
		var _loop = function _loop(i) {
			imgBlock[i].onmouseenter = function () {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			};
			imgBlock[i].onmouseleave = function () {
				realImg[i].style.display = 'none';
			};
		};

		for (var i = 0; i < imgBlock.length; i++) {
			_loop(i);
		}
	}

	if (window.matchMedia('(max-width: 768px)').matches) {
		var _loop2 = function _loop2(i) {
			imgBlock[i].onclick = function () {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			};

			sizes.onclick = function (event) {
				if (!isRealImg(event)) {
					for (var _i = 0; _i < realImg.length; _i++) {
						realImg[_i].style.display = 'none';
					}
				}
			};

			function isRealImg(event) {
				for (var _i2 = 0; _i2 < realImg.length; _i2++) {
					if (event.target.tagName == 'IMG' || event.target.tagName == 'P') {
						return true;
					}
				}
				return false;
			}
		};

		for (var i = 0; i < imgBlock.length; i++) {
			_loop2(i);
		}
	}
}

module.exports = imgHover;
},{}],9:[function(require,module,exports){
function modal() {
	var modalIsOpen = false;
	var	modalWasOpened = false;
	var body = document.getElementsByTagName('body')[0];

	// GIFT POPUP

	var gift = document.getElementsByClassName('fixed-gift')[0],
	    popupGift = document.getElementsByClassName('popup-gift')[0];
	popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', function () {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
		gift.style.display = 'none';
		modalIsOpen = true;
		modalWasOpened = true;
	});

	popupGiftClose.addEventListener('click', function () {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout(function () {
			popupGift.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// DESIGN POPUP


	var popupDesign = document.querySelector('.popup-design'),
	    orderBtn = document.querySelectorAll('.button-design'),
	    popupDesignClose = document.getElementsByClassName('popup-close')[2];

	for (var i = 0; i < orderBtn.length; i++) {
		orderBtn[i].addEventListener('click', function () {
			popupDesign.classList.remove('fadeOut');
			popupDesign.style.display = 'block';
			popupDesign.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
			modalWasOpened = true;
		});
	}

	popupDesignClose.addEventListener('click', function () {
		popupDesign.classList.remove('fadeIn');
		popupDesign.classList.add('fadeOut');
		setTimeout(function () {
			popupDesign.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// CONSULTATION POPUP

	var popupConsultation = document.getElementsByClassName('popup-consultation')[0],
	    ConsultationBtn = document.querySelectorAll('.button-consultation');
	popupConsultationClose = document.getElementsByClassName('popup-close')[0];

	for (var _i = 0; _i < ConsultationBtn.length; _i++) {
		ConsultationBtn[_i].addEventListener('click', function () {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
			modalWasOpened = true;
		});
	}

	popupConsultationClose.addEventListener('click', function () {
		popupConsultation.classList.remove('fadeIn');
		popupConsultation.classList.add('fadeOut');
		setTimeout(function () {
			popupConsultation.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// Если пользователь на странице больше 60 секунд - появится модальное окно (popup-consultation)

	var popupTimeOut = setTimeout(function () {
		if (modalIsOpen == false) {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalWasOpened = true;
		}
	}, 60000);

	if (modalIsOpen) {
		clearTimeout(popupTimeOut);
	}

	// При нажатии на подложку popup исчезает

	window.onclick = function (event) {
		if (event.target == popupGift) {
			popupGift.classList.remove('fadeIn');
			popupGift.classList.add('fadeOut');
			setTimeout(function () {
				popupGift.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}

		if (event.target == popupDesign) {
			popupDesign.classList.remove('fadeIn');
			popupDesign.classList.add('fadeOut');
			setTimeout(function () {
				popupDesign.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}

		if (event.target == popupConsultation) {
			popupConsultation.classList.remove('fadeIn');
			popupConsultation.classList.add('fadeOut');
			setTimeout(function () {
				popupConsultation.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}
	};

	body.onscroll = function () {
		if (modalWasOpened == false && document.body.scrollHeight == window.pageYOffset + window.innerHeight) {
			popupGift.classList.remove('fadeOut');
			popupGift.style.display = 'block';
			popupGift.classList.add('animated', 'fadeIn');
			gift.style.display = 'none';
			modalWasOpened = true;
		}
	};
}

module.exports = modal;
},{}],10:[function(require,module,exports){
function sliders() {
	// Верхний слайдер


	function Carousel1(setting) {
		if (document.querySelector(setting.wrap) === null) {
			console.error("Carousel not fount selector " + setting.wrap);
			return;
		}

		var privates = {};

		this.prev_slide = function () {
			--privates.opt.position;

			if (privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = "translateY(-" + privates.opt.position + "00%)";
		};

		this.next_slide = function () {
			++privates.opt.position;

			if (privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = "translateY(-" + privates.opt.position + "00%)";
		};

		setInterval(this.next_slide, 10000);

		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};
	}

	var topCarousel = new Carousel1({
		"main": ".main-slider",
		"wrap": ".main-slider-wrapper"
	});

	// Нижний слайдер


	function Carousel2(setting) {
		var _this = this;

		if (document.querySelector(setting.wrap) === null) {
			console.error("Carousel not fount selector " + setting.wrap);
			return;
		}

		var privates = {};

		this.prev_slide = function () {
			--privates.opt.position;

			if (privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = "translateX(-" + privates.opt.position + "00%)";
		};

		this.next_slide = function () {
			++privates.opt.position;

			if (privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = "translateX(-" + privates.opt.position + "00%)";
		};

		setInterval(this.next_slide, 10000);

		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev),
			"next": document.querySelector(privates.setting.next)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};

		if (privates.sel.prev !== null) {
			privates.sel.prev.addEventListener('click', function () {
				_this.prev_slide();
			});
		}

		if (privates.sel.next !== null) {
			privates.sel.next.addEventListener('click', function () {
				_this.next_slide();
			});
		}
	}

	var bottomCarousel = new Carousel2({
		"main": ".feedback-slider",
		"wrap": ".feedback-wrapper",
		"prev": ".main-prev-btn",
		"next": ".main-next-btn"
	});
}

module.exports = sliders;
},{}]},{},[1]);
