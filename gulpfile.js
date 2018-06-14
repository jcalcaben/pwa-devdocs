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


// remark-lint style rules: https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules
var styles = [
    require('remark-lint'),
    [require('remark-lint-blockquote-indentation'), ['error', 2] ],
    [require('remark-lint-code-block-style'), ['error', 'fenced'] ],
    [require('remark-lint-emphasis-marker'), ['error', '_'] ],
    [require('./modules/remark-lint-no-undefined-external-references'), ['error'] ], //Custom implementation for checking jekyll-style links
    [require('remark-lint-no-unused-definitions'), ['error'] ], //Needs a custom implementation of this to check for jekyll-style links
    [require('remark-lint-no-reference-like-url'), ['error'] ],
    [require('remark-lint-no-tabs'), ['error'] ],
    [require('remark-lint-final-newline'), ['error']],
    [require('remark-lint-first-heading-level'), ['error', 2]],
    [require('remark-lint-hard-break-spaces'), ['error']],
    [require('remark-lint-heading-increment'), ['error']],
    [require('remark-lint-list-item-content-indent'), ['error']],
    [require('remark-lint-no-consecutive-blank-lines'), ['error']],
    [require('remark-lint-no-duplicate-headings'), ['error']],
    [require('remark-lint-no-file-name-consecutive-dashes'), ['error']],
    [require('remark-lint-no-file-name-irregular-characters'), ['error', /\.a-z0-9-/ ]],
    [require('remark-lint-no-file-name-outer-dashes'), ['error']],
    [require('remark-lint-no-heading-content-indent'), ['error']],
    [require('remark-lint-no-heading-like-paragraph'), ['error']],
    [require('remark-lint-no-heading-punctuation'), ['error']],
    [require('remark-lint-no-inline-padding'), ['error']],
    [require('remark-lint-no-missing-blank-lines'), ['error']],
    [require('remark-lint-no-paragraph-content-indent'), ['error']],
    [require('remark-lint-no-shell-dollars'), ['error']],
    [require('remark-lint-ordered-list-marker-style'), ['error','.']],
    [require('remark-lint-strong-marker'), ['error','*']],
    [require('remark-lint-table-pipe-alignment'), ['error']],
    [require('remark-lint-unordered-list-marker-style'), ['error', '*']]
]
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