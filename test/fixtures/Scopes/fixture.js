var assert = require('assert');

for (var i = 0; i < 3; i += 1) {
    if (foo) {
        assert(foo === 'FOO');
    } else {
        assert(bar);
    }
}
