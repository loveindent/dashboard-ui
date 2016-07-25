/* eslint-disable no-console */
var path = require('path');
var fs = require('fs-extra');
var chalk = require('chalk');

var entries = [];

console.log('========================== Prepare Unit Tests ==================================');

console.log(chalk.blue.bold('Finding components specs'));

fs.walk('./src/commons/')
  .on('data', function(item) {
    if (/\.spec\.js$/.test(item.path)) {
      console.log(chalk.green('  +'), item.path.replace(process.cwd(), ''));
      entries.push(item.path);
    }
  })
  .on('end', function() {
    console.log(chalk.green('  \u2713'), chalk.blue('Finded ' + entries.length + ' tests files\n'));
    console.log(chalk.blue.bold('Export testFiles paths to webpack config'));

    var dirPath = path.join(process.cwd(), 'tests/.tmp');
    var filePath = path.join(dirPath, 'testFiles.js');

    fs.ensureDir(dirPath, function(err) {
      if (err) {
        console.log(chalk.red(err));
        process.exit(1);
      }

      fs.writeFile(filePath, 'module.exports=["' + entries.join('",\n"') + '"]', function(err) {
        if (err) {
          console.log(chalk.red(err));
          process.exit(1);
        }

        console.log(chalk.green('  \u2713'), chalk.blue('Successfully exported to ' + filePath.replace(process.cwd(), '')));
        console.log('================================================================================\n');
      })
    })
  })
;
