/**
 * Created by cecheveria on 6/10/2014.
 *
 * Usage:
 * node docs/js/highlightCode.js docs/code/consume-services.sh
 */

var hljs = require('highlight.js'),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),

    code = process.argv[2],
    lang = process.argv[3]
;

/**
 * FORMA 1: funciona
 *
console.log("Highlighting: " + code);

// If you know the language
//hljs.highlight(lang, code).value;

// Automatic language detection
var highlighted = hljs.highlightAuto(code).value;

console.log("Highlighted: " + highlighted);*/


var filename = code;

fs.readFile(filename, 'binary' /*'utf8'*/, function (err, buffer) {
    console.log("Highlighting resource: " + filename);

    //response = filename.replace(".code", ".hgcode");
    response = filename.split(".");
    response.pop();
    response = response.join("") + ".code";

    console.log("Highlighting response: " + response);

    var highlighted = hljs.highlightAuto(buffer).value;
    //var highlighted = hljs.highlight("javascript" /*"bash"*/ /*lang*/, buffer).value;

    console.log("Highlighted: " + highlighted);

    fs.writeFile(response, highlighted, function (err) {
        if (err) throw err;
        console.log('It\'s saved highlighted code!');
    });
});


/*
!function (a) {
    a(function () {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var b = document.createElement("style");
            b.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(b)
        }
        {
            var c = a(window), d = a(document.body);
            a(".navbar").outerHeight(!0) + 10
        }
        d.scrollspy({target: ".bs-docs-sidebar"}), c.on("load", function () {
            d.scrollspy("refresh")
        }), a(".bs-docs-container [href=#]").click(function (a) {
            a.preventDefault()
        }), setTimeout(function () {
            var b = a(".bs-docs-sidebar");
            b.affix({offset: {top: function () {
                var c = b.offset().top, d = parseInt(b.children(0).css("margin-top"), 10), e = a(".bs-docs-nav").height();
                return this.top = c - e - d
            }, bottom: function () {
                return this.bottom = a(".bs-docs-footer").outerHeight(!0)
            }}})
        }, 100), setTimeout(function () {
            a(".bs-top").affix()
        }, 100), a(".tooltip-demo").tooltip({selector: "[data-toggle=tooltip]", container: "body"}), a(".tooltip-test").tooltip(), a(".popover-test").popover(), a(".bs-docs-navbar").tooltip({selector: "a[data-toggle=tooltip]", container: ".bs-docs-navbar .nav"}), a("[data-toggle=popover]").popover(), a("#loading-example-btn").click(function () {
            var b = a(this);
            b.button("loading"), setTimeout(function () {
                b.button("reset")
            }, 3e3)
        })
    })
}(jQuery);*/
