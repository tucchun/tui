define(function (require, exports, module) {
	var $ = require("../seajs/seajs/2.2.0/sea-debug.js");
//	/**
//	 * 验证对象
//	 * @return {[type]} [description]
//	 */
//	var Verify = function () {
//		var tools = {};        //验证工具
//		this.verifyType = [];
//		this.addTool = function (tool) {
//			this.tools[tool.name] = tool;
//		};
//	}
//
//	/**
//	 * 验证工具模型
//	 * @param  {[type]} name  [description]
//	 * @param  {[type]} attrs [description]
//	 * @return {[type]}       [description]
//	 */
//	Verify.prototype.tool = function (name, attrs, fn) {
//		this.attrs = {};
//		this.name = name;
//		this.attrs.name = name;
//		this.check = fn || function () {
//		};
//	};
//
//	var required = Verify.prototype.tool("required", {error: "此项必须输入！"}, function (el, opts) {
//		if (!!el && !!el.value) {
//			return true;
//		}
//		return false;
//	});
//
//	/**
//	 * 显示信息
//	 * @param  {[type]} el [description]
//	 * @return {[type]}    [description]
//	 */
//	Verify.prototype.showMsg = function (el) {
//
//	}
//
//	/**
//	 * 验证元素
//	 * @param  {[type]} el [description]
//	 * @return {[type]}    [description]
//	 */
//	Verify.prototype.check = function (el) {
//
//	}
//
//	/**
//	 * 验证表单
//	 * @param  {[type]} form [description]
//	 * @return {[type]}      [description]
//	 */
//	Verify.prototype.cf = function (form) {
//
//	}
//
//	/**
//	 * 初始化数据
//	 * @return {[type]} [description]
//	 */
//	Verify.prototype.init = function () {
//		this.addTool(required);
//	}

	var settings = [
		{
			element: {}, //dom元素
			conditions: [
				{
					name: "required",
					settings: {}
				}
			]
		},
		{}
	];

	var tools = {};

	//初始化参数
	function initSettings(el) {
		return {};
	}

	//验证元素
	function check(el) {
		var settings = initSettings(el);
	}

	//验证对象
	var verify = {
		settings: {},
		check: function (el) {
		}
	};



});
