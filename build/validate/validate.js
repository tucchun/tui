define(function (require, exports, module) {
		var $ = require("/tui/build/jquery/jquery/1.10.1/jquery-debug.js");
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


//	/**
//	 * 初始化数据
//	 * @return {[type]} [description]
//	 */
//	Verify.prototype.init = function () {
//		this.addTool(required);
//	}

		/**
		 *
		 * @constructor
		 */
//		function Verify() {
//			this.tools = {};
//			this.toolsName = [];
//			this.addTool = function (tool) {
//				var name = tool.name;
//				if (!!name && !this.tools[name]) {
//					this.tools[name] = tool;
//					this.toolsName.push(name);
//				}
//			}
//		}


		/**
		 * 初始化表单元素参数
		 * @param el
		 * @returns {{}}
		 */
//		Verify.prototype.initSettings = function (el) {
//			var toolsName = this.toolsName,
//				toolName = "",
//				attrValue = "",
//				index = 0,
//				len = toolsName.length,
//				settings = [],
//				condition = {},
//				conditions = [];
//			while (!!len && index < len) {
//				toolName = toolsName[index++];
//				if (el.hasAttribute(toolName)) {
//					attrValue = el.getAttribute(toolName);
//					if (!!attrValue) {
//						settings = $.parseJSON(attrValue);
//					}
//				}
//				condition = {
//					name: toolName,
//					settings: settings
//				};
//				conditions.push(condition);
//			}
//			return {
//				element: el,
//				conditions: conditions
//			};
//		}

		/**
		 * 验证表单元素
		 * @param el
		 * @returns {{isRet: boolean, tool: *}}
		 */
//		Verify.prototype.check = function (opts) {
//			var _this = this,
//				el = opts.element,
//				conditions = opts.conditions,
//				len = conditions.length,
//				index = 0,
//				tool = null,
//				isRet = false,
//				userSettings = null,
//				verify = null;
//			while (!!len && index < len) {
//				tool = conditions[index++];
//				userSettings = tool.settings;
//				verify = _this.tools[tool.name];
//				$.extend(verify.settings, userSettings);
//				isRet = verify.check(el);
//				if (!isRet) {
//					break;
//				}
//			}
//			return {
//				isRet: isRet,
//				tool: tool
//			};
//		}


		/**
		 * 显示信息
		 * @param opts
		 */
//		Verify.prototype.showMsg = function (opts) {
//		}


//		var elementSettings = {
//			element: null,  // dom
//			conditions: []  // [condition..cons]
//		};

//		var condition = {
//			name: "",       //verify方法
//			settings: {}    //方法設置
//		};

//		var settings = [
//			{
//				element: {}, //dom元素
//				conditions: [
//					{
//						name: "required",
//						settings: {}
//					},
//					{
//						name: "len",
//						settings: {}
//					}
//				]
//			},
//			{}
//		];

		//验证对象
//		var verify = {
//			settings: {},
//			check: function (el,queue) {
//
//			}
//		};

		var Verify = function (form) {
			this.toolsName = ["required"];
			this.verifyType = "input[type='text'],input[type='password'],select";
			this.isRet = true;
			this.conf = [];
			this.verifing = {};
			this.verifies = {};
			this.addVerify = function (name, verify) {
				this.verifies[name] = verify;
			};
			this.setConf(form);
			this._ini();
		};

		var elementSettings = {
			element: null,  // dom
			conditions: []  // [condition..cons]
		};

		var condition = {
			name: "",       //verify方法
			settings: {}    //方法設置
		};

		/**
		 * 初始化表单元素参数
		 * @param el
		 * @returns {{}}
		 */
		Verify.prototype.initSettings = function (el) {
			var toolsName = this.toolsName,
				toolName = "",
				attrValue = "",
				index = 0,
				len = toolsName.length,
				settings = [],
				condition = {},
				conditions = [];
			var n = "data-" + toolName;
			while (!!len && index < len) {
				toolName = toolsName[index++];
				if (el.hasAttribute(n)) {
					attrValue = el.getAttribute(n);
					if (!!attrValue) {
						settings = $.parseJSON(attrValue);
					}
				}
				condition = {
					name: toolName,
					settings: settings
				};
				conditions.push(condition);
			}
			return {
				element: el,
				conditions: conditions
			};
		}

		Verify.prototype._ini = function () {
			var self = this;
			self.addVerify("required", required)
		};

		Verify.prototype.check = function () {
			var self = this;
			self.verifing = self.conf.shift();
			if (!self.verifing) return;
			self._check();
		};

		Verify.prototype.setConf = function (form) {
			var self = this;
			var	$e = $(form).find(self.verifyType);
			$e.each(function (i) {
				var settings = self.initSettings(this);
				self.conf.push(settings);
			});
		};


		Verify.prototype._check = function () {
			var self = this,
				verifing = self.verifing,
				element = verifing.element,
				conditions = verifing.conditions,
				condition = conditions.shift(),
				verifyName = condition.name,
				settings = condition.settings,
				opts = {element: element, settings: settings};
			var f = self.verifies[verifyName];
			var o = Array.prototype.slice.call(opts,0);
			f.call(self,opts);
//			self.verifies[verifyName].apply(self, opts);
		};

		Verify.prototype.showMsg = function (isRet, opts) {
			if (isRet) {

			} else {

			}
		};

		Verify.prototype.next = function () {
			var self = this,
				conditions = self.verifing.conditions;
			if (!!conditions && conditions instanceof Array && conditions.length > 0) {
				self._check();
			} else {
				self.check();
			}
		}
		/**
		 * 非空验证
		 * @param opts {element: element,settings: settings};
		 */
		function required(opts) {
			var el = opts.element,
				settings = {
					error: "此项必须输入！"
				};
			$.extend(settings, opts.settings);
			if (!!el.value) {
				this.next();
			} else {
				this.showMsg(el, opts);
				this.check();
				this.isRet = false;
			}
		}

		exports.Verify = Verify;

	}
);
