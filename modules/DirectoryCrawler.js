var fs = require('fs');
var path = require('path');

/**
 * Recursively crawls a directory, looks for files that match a regular expression,
 * and passes that filepath to a function.
 * @param {String} directory 
 * @param {RegExp} filter 
 * @param {Function} callback 
 */
var DirectoryCrawler = (directory, filter, callback) => {

    //Check for existence of path
    if(!fs.existsSync(directory)){
        console.log("Path does not exists: "+path);
        return
    }

    let files = fs.readdirSync(directory);

    for( index in files ) {
        let filename = path.join(directory,files[index]);

        let  stat = fs.lstatSync(filename);

        if(stat.isDirectory()){
            DirectoryCrawler(filename,filter,callback); //recursive step
        }
        else if( filter.test(filename) ){
            callback(filename);
        }
    }

}

module.exports = DirectoryCrawler;