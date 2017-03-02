/* globals Ember */

import QUnit from 'qunit';

var parseActual = function(actual) {
  if (typeof actual === 'string')
    return find(actual);
  else
    return actual;
};

export default function registerHelpers() {
  QUnit.assert.equals = QUnit.assert.equal;
  QUnit.assert.notEquals = QUnit.assert.notEqual;
  QUnit.assert.exists = function(actual, message) {
    var length = parseActual(actual).length;

    this.pushResult({
      result: length > 0,
      actual: length,
      expected: 'At least 1',
      message
    });
  };

  QUnit.assert.numExists = function(actual, count, message) {
    var length = parseActual(actual).length;

    this.pushResult({
      result: length === count,
      actual: length,
      expected: count,
      message
    });
  };

  QUnit.assert.notExists = function(actual, message) {
    var length = parseActual(actual).length;

    this.pushResult({
      result: length === 0,
      actual: length,
      expected: 0,
      message
    });
  };

  QUnit.assert.isVisible = function(actual, message) {
    var elIsVisible = parseActual(actual).is(':visible');

    this.pushResult({
      result: elIsVisible,
      actual: elIsVisible,
      expected: true,
      message
    });
  };

  QUnit.assert.isHidden = function(actual, message) {
    var el = parseActual(actual);

    if (Ember.isEmpty(el))
      this.pushResult({
        result: true,
        actual: el,
        expected: true,
        message
      });
    else
      this.pushResult({
        result: el.is(':hidden') === true,
        actual: el.is(':hidden'),
        expected: true,
        message
      });
  };

  QUnit.assert.isFocused = function(actual, message) {
    var el = parseActual(actual),
        focused = $(document.activeElement);

    // All Ember elements have a unique ID
    this.pushResult({
      result: el.attr('id') === focused.attr('id'),
      actual,
      expected: true,
      message
    });
  };

  QUnit.assert.isPresent = function(actual, message) {
    this.pushResult({
      result: Ember.isPresent(actual),
      actual,
      expected: true,
      message
    });
  };

  QUnit.assert.isBlank = function(actual, message) {
    this.pushResult({
      result: Ember.isBlank(actual),
      actual,
      exected: true,
      message
    });
  };

  QUnit.assert.includes = function(actual, expected, message) {
    var type = Ember.typeOf('actual');

    if (type !== 'string' && type !== 'array')
      throw 'Object does not appear to be a string or array';

    this.pushResult({
      result: actual.indexOf(expected) > -1,
      actual,
      expected,
      message
    });
  };
  QUnit.assert.contains = QUnit.assert.includes;

  QUnit.assert.notIncludes = function(actual, expected, message) {
    if (isBlank(actual))
      actual = [];
    var objType = Ember.typeOf(actual);

    if (objType !== 'string' && objType !== 'array') {
      throw 'Object needs to be a string or an array';
    }

    this.pushResult({
      result: actual.indexOf(expected) === -1,
      actual,
      expected,
      message
    });
  };
  QUnit.assert.notContains = QUnit.assert.notIncludes;

  QUnit.assert.classIncludes = function(actual, expected, message) {
    const el = parseActual(actual);
    const classes = el.attr('class') || [];

    this.pushResult({
      result: classes.indexOf(expected) > -1,
      classes,
      expected,
      message
    });
  };
  QUnit.assert.classContains = QUnit.assert.classIncludes;

  QUnit.assert.classNotIncludes = function(actual, expected, message) {
    const el = parseActual(actual);
    const classes = el.attr('class') || [];

    this.pushResult({
      result: classes.indexOf(expected) === -1,
      classes,
      expected,
      message
    });
  };
  QUnit.assert.classNotContains = QUnit.assert.classNotIncludes;

  QUnit.assert.hasBreadcrumbs = function(crumbs, message) {
    var base = $('.breadcrumbs>li');

    var currentCrumbs = base.map(function(i, a) {
      return $(a).text();
    }).toArray().join(' - ');
    var crumbsDisplay = crumbs.join(' - ');

    this.pushResult({
      result: currentCrumbs === crumbsDisplay,
      actual: currentCrumbs,
      expected: crumbsDisplay,
      message
    });
  };
};
