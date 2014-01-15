/// <reference path="../vendor/jquery-2.0.3.min.js" />

var storageJS = storageJS || {};

(function (ns, $) {
  function provider() {
    this.keymap = {};
  }

  provider.prototype.register = function (identifier, options) {
    if (identifier && typeof identifier === 'string') {
      this.keymap[identifier] = options;
    }
  };

  provider.prototype.request = function (identifier) {
    return $.ajax(this.keymap[identifier]);
  };

  provider.prototype.remove = function (identifier) {
    delete this.keymap[identifier];
  };

  ns.provider = provider;

})(storageJS, jQuery);