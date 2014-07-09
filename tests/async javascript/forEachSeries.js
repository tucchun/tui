var basePath = process.env.APPDATA + "\\npm\\node_modules\\";
var async = require(basePath + "\\async\\lib\\async.js");
var fs = require("fs");
process.chdir("recipes");  // change the tworking directory


var concatenation = "";

var dirContents = fs.readdirSync(".");

async.filter(dirContents, isFilename, function(filenames){
	async.forEachSeries(filenames, readAndConcat, onComplete);
})

function isFilename(filename, callback){
	fs.stat(filename, function(err, stats){
		if (err) throw err;
		callback(stats.isFile());
	});
}

function readAndConcat(filename, callback){
	fs.readFile(filename, 'utf8', function(err, fileContents){
		if (err) return callback(err);
		concatenation += fileContents;
		callback();
	});
}

function onComplete(err){
	if (err) throw err;
	console.log(concatenation);
}

//C:\Users\tucchun\AppData\Roaming\npm\node_modules\async\lib