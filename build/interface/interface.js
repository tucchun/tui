define(function(require, exports, module) {
	/**
	 * [Interface description] 创建接口方法
	 * @param {[type]} name 接口名称
	 * @param {[type]} methods 方法名
	 */
	var Interface = function(name, methods) {
		if (arguments.length !== 2) {
			throw new Error("Interface constructor called with " + arguments.length +
				"arguments, but expected exactly 2.");
		};
		this.name = name;
		this.methods = [];
		for (var i = 0, len = methods.length; i < len; i++) {
			if (typeof methods[i] !== 'string') {
				throw new Error("Interface constructor expects method names to be pass in as a string");
			};
			this.methods.push(methods[i]);
		}
	};
	/**
	 * [ensureImplements description]  判断对象是否实现本身用到的接口中的方法
	 * @param  {[type]} instance 对象
	 * @return {[type]}
	 */
	Interface.ensureImplements = function(instance) {
		if (arguments.length < 2) {
			throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
		};
		for (var i = 1, len = arguments.length; i < len; i++) {
			var interface = arguments[i];
			if (interface.constructor !== Interface) {
				throw new Error("Function Interface.ensureImplements expects arguments two and above to instances of Interface.");
			};
			for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
				var method = interface.methods[j];
				if (!instance[method] || typeof instance[method] !== 'function') {
					throw new Error("Function interface.ensureImplements: instance" +
						"does not implement the " + interface.name +
						" interface. Method " + method + " was not found.")
				};
			}
		}
	}
	exports.Interface = Interface;
});