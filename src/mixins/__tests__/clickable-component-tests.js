'use strict';

jest.dontMock('../clickable-component');

describe('ClickableComponentMixin', function() {
  var ClickableComponentMixin;

  beforeEach(function() {
    ClickableComponentMixin = require('../clickable-component');
  });

  describe('propTypes', function() {
    it('href is declared', function() {
      expect(ClickableComponentMixin.propTypes.href).toBeDefined();
    });

    it('onClick is declared', function() {
      expect(ClickableComponentMixin.propTypes.onClick).toBeDefined();
    });
  });

  describe('getDefaultProps', function() {
    var defaultProps;
    beforeEach(function() {
      defaultProps = ClickableComponentMixin.getDefaultProps();
    });

    it('sets href to empty string', function() {
      expect(defaultProps.href).toEqual('');
    });

    it('sets onClick to undefined', function() {
      expect(defaultProps.onClick).toBeUndefined();
    });
  });
});
