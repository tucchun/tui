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
	function Verify(){
		var tools = {};
		this.addTool = function(tool){
			var name = tool.name;
			if(!!name && !tools[name]){
				tools[name] = tool;
			}
		}
	}
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

	//验证工具列表
	var tools = {};

	//初始化表单元素参数
	function initSettings(el) {
		return {};
	}

	/**
	 * 验证表单元素
	 * @param el
	 * @returns {{isRet: boolean, tool: *}}
	 */
	function check(el,opts) {
		var settings = opts;
		var conditions = settings.conditions;
		var len = conditions.length;
		var index = 0;
		var tool = null;
		var isRet = false;
		while(!!len && index < len){
			tool = conditions[index++];
			var opts = tool.settings;
			var verify = tools[tool.name];
			$.extend(verify.settings, opts);
			isRet = verify.check(el);
			if(!isRet){
				break;
			}
		}
		return {
			isRet: isRet,
			tool: tool
		};
	}

	function showMsg(opts){}

	//验证对象
	var verify = {
		settings: {},
		check: function (el) {
		}
	};



});
