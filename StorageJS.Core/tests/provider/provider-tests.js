/// <reference path="../qunit-1.13.0.js" />
/// <reference path="../../app/provider.js" />

module('Provider Unit Tests');

var provider = new storageJS.provider(),
    getOptions = { url: '//localhost' };

test('Initialization', function (assert) {
  assert.strictEqual(typeof provider, 'object', 'Provider object instantiated.');
});

test('Register request', function (assert) {
  provider.register('getData', getOptions);
});

test('Execute request', function (assert) {
  
});

test('Remove request', function (assert) {
  provider.remove('getData');
});