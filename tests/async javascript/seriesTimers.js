var basePath = process.env.APPDATA + "\\npm\\node_modules\\";

var async = require(basePath + "\\async\\lib\\async.js");

var start = new Date();

async.series([
	function(callback) { setTimeout(callback, 100); },
	function(callback) { setTimeout(callback, 200); },
	function(callback) { setTimeout(callback, 300); }
], function(err, results){
	// 显示自start而流逝的时间
	console.log('Completed in ' + (new Date() - start) + "ms");
});


async.series([
	function(callback) { 
		console.log("step.1");
		callback(null,"");
	},
	function(callback) { 
		console.log("step.2");
		callback(null,"");
	},
	function(callback) { 
		console.log("step.3");
		callback(null,"");
	}
], function(err, results){
	// 显示自start而流逝的时间
	console.log("end.")
});
