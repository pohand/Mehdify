var assert = require('assert');
var mehdicate = require('../dist/script.min.js');

describe('mehdicate', function() {
    it('should return the next biggest integer using the same digits', function() {
        assert.equal(32214, mehdicate(32142));
        assert.equal(491, mehdicate(419));
        assert.equal(712, mehdicate(271));
        assert.equal(81, mehdicate(18));
    });
    it('should return X when there is no larger integer', function() {
        assert.equal(542, mehdicate(542));
        assert.equal(321, mehdicate(321));
        assert.equal(9100, mehdicate(9100));
    });
});