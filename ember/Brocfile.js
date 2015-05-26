/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

+app.import({development:'vendor/route-recognizer/dist/route-recognizer.js'});
+app.import({development:'vendor/FakeXMLHttpRequest/fake_xml_http_request.js'});
+app.import({development:'vendor/pretender/pretender.js'});

module.exports = app.toTree();
