var fs = require('fs');
process.chdir('recipes');  //改变工作目录
var concatenation = '';

fs.readdir('.',function(err, filenames){
	if (err)  throw err;

	function readFileAt(i){
		var filename = filenames[i];
		fs.stat(filename, function(err, stats){
			if (err) throw err;
			if (! stats.isFile()) return readFileAt(i + 1);

			fs.readFile(filename, 'utf8', function(err, text){
				if (err) throw err;
				concatenation += text;
				if (i + 1 === filenames.length) {
					// 所有文件均已读取，可现实输出
					 console.log(filename);
					// return console.log(concatenation);
				};
				readFileAt(i + 1);
			});
		})
	}

	readFileAt(0);
});