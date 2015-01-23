jest.dontMock('../../src/components/toggle');

var assert = require('assert');

describe('Toggle', function() {
  var Toggle, onToggle, React, TestUtils;

  beforeEach(function() {
    // Include React and TestUtils here because React can get double-included.
    // This is due to various auto-mocking magic with Jest and require.
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Toggle = require('../../src/components/toggle');
    onToggle = function(toggled) {

    };
  });

  it('is a Toggle element', function() {
    var toggle = <Toggle onToggle={onToggle} />;
    expect(TestUtils.isElementOfType(toggle, Toggle)).toEqual(true);
  });

  it('is defined', function() {
    expect(Toggle).toBeDefined();
  });

  it('defaults toggled to false', function() {
    // JSX doesn't really return an actual instance of Toggle. Only once the
    // component is rendered into the DOM does React fully hydrate an instance
    // of Toggle.
    var toggle = TestUtils.renderIntoDocument(<Toggle onToggle={onToggle} />);

    // At this point the React component lifecycle has ran, including the
    // getDefaultProps() method. There's no need to test it directly.
    expect(toggle.props.toggled).toEqual(false);
  });
});
