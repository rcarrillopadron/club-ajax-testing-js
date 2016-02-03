/*! clubAjaxTestingJs v0.0.0 - MIT license */
'use strict';

var Happyview = Happyview || {};

Happyview.Patient = (function () {
  var Patient = function(name, ssn) {
    var myName = name || '';
    var mySsn = ssn || '';

    this.name = myName;
    this.ssn = mySsn;
  };

  Patient.prototype = {
    sayName: function() {
      return "Hello " + this.name;
    },
    isValidSsn: function() {
      this.bar == private_number;
    }
  };

  return Patient;
})();
