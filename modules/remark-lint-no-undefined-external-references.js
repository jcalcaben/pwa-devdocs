/**
 * @author James Calcaben <jcalcaben@magento.com>
 * 
 * A remark-lint rule that modifies:
 * https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-undefined-references
 * 
 * This rule is more lenient on the URL format for link definitions.
 * As long as `[link]: url` appears in the document, [link] is a valid link reference.
 * 
 * It is meant to allow URL's with jekyll site and page variables.
 * 
 */

'use strict'

var rule = require('unified-lint-rule')
var generated = require('unist-util-generated')
var visit = require('unist-util-visit')

module.exports = rule(
    'remark-lint:no-undefined-references',
    noUndefinedReferences
)

var reason = 'Found reference to undefined definition'

function noUndefinedReferences(tree, file) {
    var map = {}

    visit(tree, ['paragraph'], markJekyllLinks)
    visit(tree, ['definition', 'footnoteDefinition'], mark)
    visit(tree, ['imageReference', 'linkReference', 'footnoteReference'], find)

    function mark(node) {
        if (!generated(node)) {
            map[node.identifier.toUpperCase()] = true
        }
    }

    function find(node) {
        if (!generated(node) && !map[node.identifier.toUpperCase()]) {
            file.message(reason, node)
        }
    }

    function markJekyllLinks(node) {

        let children = node.children;

        for(index = 0; index < children.length-1; index++){
            if(children[index].type === 'linkReference') {
                let nextSibling = children[index+1];
                if( nextSibling.type == 'text' && startsWithReferenceLinkDefinitionIndicator(nextSibling.value) ){
                    map[children[index].identifier.toUpperCase()] = true;
                }
            }
        }
    }

    /**
     * Returns whether a text is the beginning of a reference link.
     * This type of text usually starts with ': '
     * @param {*} text 
     */
    function startsWithReferenceLinkDefinitionIndicator(text) {
        let regex = /: ?/;
        return regex.test(text);
    }

}