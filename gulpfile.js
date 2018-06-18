// Requires
var gulp = require('gulp');
var jekyll = require('jekyll-tasks')(gulp);
var path = require('path'); 

var directoryCrawler = require('./modules/DirectoryCrawler');

// Directories that contain markdown content to do various checks
var contentDirectories = [
    "peregrine",
    "technologies",
    "pwa-buildpack",
    "venia-pwa-concept",
];

var styles = require('./modules/remark-preset-lint-devdocs');

var styleChecker = (filename) => {
    let StyleChecker = require('./modules/StyleChecker');

    return StyleChecker(filename, styles);
}

gulp.task('stylecheck', () => {
    for( index in contentDirectories ) {
        directoryCrawler(
            path.join('./src/',contentDirectories[index]),
            /\.md$/,
            styleChecker); 
    }

});