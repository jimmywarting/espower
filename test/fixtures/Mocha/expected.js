'use strict';
var assert = require('power-assert');
describe('Array#indexOf()', function () {
    beforeEach(function () {
        this.ary = [
            1,
            2,
            3
        ];
    });
    it('should return index when the value is present', function () {
        var who = 'ariya', two = 2;
        assert(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(who, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(two, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(this.ary.indexOf(who) === two)',
            filepath: 'path/to/some_test.js',
            line: 11
        }));
    });
    it('should return -1 when the value is not present', function () {
        var minusOne = -1, two = 2;
        assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
            filepath: 'path/to/some_test.js',
            line: 15
        }), 'THIS IS AN ASSERTION MESSAGE');
    });
});