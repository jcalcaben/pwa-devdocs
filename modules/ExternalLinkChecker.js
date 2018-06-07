var fs = require("fs")
var markdownLinkCheck = require('markdown-link-check');

var linkCheckOptions = {
    "ignorePatterns": [
        {
            "pattern": /^.*#/
        }
    ]
}

/**
 * Checks the external links in a file
 * @param {String} filename 
 */
var ExternalLinkChecker = (filename) => {
    let content = fs.readFileSync(filename, "utf8")
    markdownLinkCheck(content, linkCheckOptions, function (err, results) {
        if (err) {
            console.error('Error', err);
            return;
        }
        results.forEach(function (result) {
            //console.log('%s is %s', result.link, result.status);
            if(result.status==="dead"){
                console.error('\033[31mDEAD LINK\x1b[0m in %s: \x1b[35m%s\x1b[0m',filename, result.link);
            }
        });
    }); 
}

module.exports = ExternalLinkChecker;