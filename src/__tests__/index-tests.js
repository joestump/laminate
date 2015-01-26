'use strict';

jest.dontMock('../index');

describe('Laminate', function() {
  var Laminate;

  beforeEach(function() {
    Laminate = require('../index');
  });

  it('is defined', function() {
    expect(Laminate).toBeDefined();
  });
});
