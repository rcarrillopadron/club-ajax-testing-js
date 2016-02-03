/* global clubAjaxTestingJs, describe, it, expect, should */

describe('clubAjaxTestingJs()', function () {
  'use strict';

  it("When saying the name it should contain 'Hello' at the beginning", function() {
    var patient = new Happyview.Patient("Roberto", "123-45-6789");
    expect(patient.sayName()).to.equal("Hello Roberto");
  });

  it('exists', function () {
    expect(clubAjaxTestingJs).to.be.a('function');
  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
