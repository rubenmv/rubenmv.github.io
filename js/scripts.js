/*global require*/
/**
 * Minified library for DOM ready and listeners. IE legacy support
 */
// minified.js 'require' implementation only works with minified.js and related
(function() {
	'use strict';

	var MINI = require('minified');
	var $ = MINI.$;

	function showTop() {
		$('#works').animate({
				$$show: 1,
				$$fade: 1
			}, 300)
			.then(function() {
				window.location = '#top';
			});
	}

	function showWorks() {
		$('#works').animate({
				$$show: 1,
				$$fade: 1
			}, 300)
			.then(function() {
				window.location = '#works';
			});
	}

	function showContact() {
		$('#works').animate({
				$$show: 0,
				$$fade: 0
			}, 300)
			.then(function() {
				window.location = '#contact';
			});
	}

	// Listeners
	$.ready(function domReady() {
		// Menu
		$('#menu-top').onClick(showTop);
		$('.link-works').onClick(showWorks);
		$('#menu-contact').onClick(showContact);
	});
})();
