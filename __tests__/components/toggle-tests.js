jest.dontMock('../../src/components/toggle');

var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Toggle', function() {
  var Toggle;

  beforeEach(function() {
    Toggle = require('../../src/components/toggle');
  });

  it('is a Toggle element', function() {
    var onToggle = function(toggled) {

    };

    var toggle = (<Toggle onToggle={onToggle} />);
    expect(TestUtils.isElementOfType(toggle, Toggle)).toEqual(true);
  });

  it('is defined', function() {
    expect(Toggle).toBeDefined();
  });
});
