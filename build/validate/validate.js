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
        function Verify() {
            this.tools = {};
            this.toolsName = [];
            this.addTool = function (tool) {
                var name = tool.name;
                if (!!name && !this.tools[name]) {
                    this.tools[name] = tool;
                    this.toolsName.push(name);
                }
            }
        }


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
            while (!!len && index < len) {
                toolName = toolsName[index++];
                if (el.hasAttribute(toolName)) {
                    attrValue = el.getAttribute(toolName);
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

        /**
         * 验证表单元素
         * @param el
         * @returns {{isRet: boolean, tool: *}}
         */
        Verify.prototype.check = function (opts) {
            var _this = this,
                el = opts.element,
                conditions = opts.conditions,
                len = conditions.length,
                index = 0,
                tool = null,
                isRet = false,
                userSettings = null,
                verify = null;
            while (!!len && index < len) {
                tool = conditions[index++];
                userSettings = tool.settings;
                verify = _this.tools[tool.name];
                $.extend(verify.settings, userSettings);
                isRet = verify.check(el);
                if (!isRet) {
                    break;
                }
            }
            return {
                isRet: isRet,
                tool: tool
            };
        }


        /**
         * 显示信息
         * @param opts
         */
        Verify.prototype.showMsg = function (opts) {
        }


        var elementSettings = {
            element: null,  // dom
            conditions: []  // [condition..cons]
        };

        var condition = {
            name: "",       //verify方法
            settings: {}    //方法設置
        };

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

        //验证对象
        var verify = {
            settings: {},
            check: function (el) {
            }
        };


    }
)
;
