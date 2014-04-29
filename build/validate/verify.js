/**
 * Created by TuCChun on 2014/4/28.
 */
define(function (require, exports, module) {
	var Verify = function () {
	};

	var elementSettings = {
		element: null,  // dom
		conditions: []  // [condition..cons]
	};

	var condition = {
		name: "",       //verify方法
		settings: {}    //方法設置
	};

	Verify.prototype = {
		constructor: Verify,
		check: function (element, conditions) {
		},
		_check: function (element, condition) {

		},
		showMsg: function (isRet, element, txt) {
		},
		verify: function (form) {

		},
		initSettings: function (el) {

		},
		next: function(queue){

		}
	};
});