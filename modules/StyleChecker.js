/**
 * A module that reports on the adherance of file content to remark-lint rules
 * 
 * https://github.com/remarkjs/remark-lint
 * 
 */
var fs = require("fs")

var report = require('vfile-reporter');
var remark = require('remark');

/**
 * Outputs a report on the adherance to a set of styles for the file content
 * @param {String} filename The name of the file to process
 * @param {Array} styles An array of remark-lint rules
 */
module.exports = (filename, styles) => {
    let content = fs.readFileSync(filename, "utf8")
    var file = remark()
        .use(styles)
        .process(content, (err, file) => {
            console.log(filename + ": ");
            console.error(report(err || file));
        });

}