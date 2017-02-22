'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Appboy` integration.
 */

var Appboy = module.exports = integration('Appboy')
  .tag('');

/**
 * Initialize.
 *
 * @api public
 */

Appboy.prototype.initialize = function() {
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Appboy.prototype.loaded = function() {
};

