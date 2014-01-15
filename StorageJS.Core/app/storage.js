
var storageJS = storageJS || {};

(function (ns) {
  var storage = function (type) {
    this.store = (type === 'local') ? localStorage || {} : sessionStorage || {};
  };

  storage.prototype.getVal = function (key) {
    return this.store[key];
  };

  storage.prototype.getObj = function (key) {
    return JSON.parse(this.getVal(key));
  };

  storage.prototype.setVal = function (key, value) {
    if (typeof value === 'object' || typeof value === 'function') return;
    this.store[key] = value;
  };

  storage.prototype.setObj = function (key, value) {
    if (typeof value === 'function') return;
    this.setVal(key, JSON.stringify(value));
  };

  storage.prototype.length = function () {
    return this.store.length;
  };

  storage.prototype.clear = function () {
    if (this.store.constructor === Storage) {
      this.store.clear();
    } else {
      this.store = {};
    }
  };

  ns.storage = storage;

})(storageJS);