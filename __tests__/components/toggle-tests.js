jest.dontMock('../../src/components/toggle');

var assert = require('assert');

describe('Toggle', function() {
  it('is defined', function() {
    var Toggle = require('../../src/components/toggle');
    expect(Toggle).toBeDefined();
  });
});
