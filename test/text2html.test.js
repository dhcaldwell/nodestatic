/**
* Created with nodestatic.
* User: dhcaldwell
* Date: 2014-06-21
* Time: 02:25 AM
* To change this template use Tools | Templates.
*/
var expect = require('expect.js');

describe('Text should render as the body of the HTML template.', function() {
    var t2h = require('../lib/text2html');
    it('library loads without error', function() {
        expect(t2h).not.to.be(undefined);
    });
    it('can load a template', function() {
        var text = t2h.getHtml('test.ejs', {name:'test'});
        expect(text).not.to.be(undefined);
    })
})