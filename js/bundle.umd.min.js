(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.myApp = global.myApp || {})));
}(this, function (exports) { 'use strict';

	var surname = "Smith";

	var info =  {
		"name" : "Jonh",
		"surname" : surname
	}

	function fullName() {
		return info.name + " - " + info.surname;
	}

	exports.fullName = fullName;

	Object.defineProperty(exports, '__esModule', { value: true });

}));