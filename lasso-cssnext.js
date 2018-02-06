'use strict';

var postcss = require('postcss');
var cssnext = require('postcss-cssnext');

module.exports = function(lasso, config) {

  config = config || {};

  lasso.addTransform({
    contentType: 'css',
    name: module.id,
    stream: false,
    transform: function(code) {
      var processed = postcss([cssnext(config)]).process(code);
      processed.warnings().forEach(function(warn) {
        process.stderr.write(warn.toString());
      });
      return processed.css;
    }
  });
};
