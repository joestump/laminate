'use strict';

jest.dontMock('../toggle');

describe('Toggle', function() {
  var Toggle, toggle, mock, React, TestUtils;

  beforeEach(function() {
    // Include React and TestUtils here because React can get double-included.
    // This is due to various auto-mocking magic with Jest and require.
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Toggle = require('../toggle');

    // We'll use this mock to check for toggle events being called.
    mock = {
      onToggle: function() {

      }
    };
    spyOn(mock, 'onToggle');

    // JSX doesn't really return an actual instance of Toggle. Only once the
    // component is rendered into the DOM does React fully hydrate an instance
    // of Toggle.
    toggle = <Toggle onToggle={mock.onToggle} />;
  });

  it('is a Toggle element', function() {
    expect(TestUtils.isElementOfType(toggle, Toggle)).toEqual(true);
  });

  it('is defined', function() {
    expect(Toggle).toBeDefined();
  });

  it('defaults toggled to false', function() {
    var elem = TestUtils.renderIntoDocument(toggle);

    // At this point the React component lifecycle has ran, including the
    // getDefaultProps() method. There's no need to test it directly.
    expect(elem.props.toggled).toEqual(false);
  });
});
