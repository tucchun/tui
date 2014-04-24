define(function(require, exports, module) {
	/**
	 * 验证对象
	 * @return {[type]} [description]
	 */
	var Verify = function(){
		var tools = {};
		this.verifyType = [];
		this.addTool = function(tool){};
	}

	/**
	 * 验证工具模型
	 * @param  {[type]} name  [description]
	 * @param  {[type]} attrs [description]
	 * @return {[type]}       [description]
	 */
	Verify.prototype.tool = function(name,attrs){
		this.attrs = attrs;
		this.name = name;
		this.check = function(){};
	};

	/**
	 * 显示信息
	 * @param  {[type]} el [description]
	 * @return {[type]}    [description]
	 */
	Verify.prototype.showMsg = function(el){

	}

	/**
	 * 验证元素
	 * @param  {[type]} el [description]
	 * @return {[type]}    [description]
	 */
	Verify.prototype.check = function(el){

	}

	/**
	 * 验证表单
	 * @param  {[type]} form [description]
	 * @return {[type]}      [description]
	 */
	Verify.prototype.cform = function(form){

	}

	/**
	 * 初始化数据
	 * @return {[type]} [description]
	 */
	Verify.prototype.init = function(){}


	

});
