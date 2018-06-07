// Requires
var gulp = require('gulp');
var jekyll = require('jekyll-tasks')(gulp);
var markdownLinkCheck = require('markdown-link-check');

var fs = require("fs")
var path = require('path')

var directoryCrawler = require('./modules/DirectoryCrawler');
var externalLinkChecker = require('./modules/ExternalLinkChecker')

// Directories that contain markdown content to do various checks
var contentDirectories = [
    "peregrine",
    "technologies",
    "pwa-buildpack",
    "venia-pwa-concept",
]
gulp.task('tests', () => {
    for( index in contentDirectories ) {
        directoryCrawler(
            path.join('./src/',contentDirectories[index]),
            /\.md$/,
            externalLinkChecker); 
    }
})