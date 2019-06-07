import {
  isPresent,
  isBlank,
  typeOf,
  isEmpty
} from '@ember/utils';
import { isArray } from '@ember/array';
import QUnit from 'qunit';
import tableContainsHelper from 'mammoth-test-helpers/test-support/helpers/table-contains-helper';
import { findAll } from '@ember/test-helpers';

const parseActual = function(actual) {
  if (typeOf(actual) === 'string') {
    return findAll(actual);

  } else {
    return actual;
  }
};

export { parseActual };

export default function registerHelpers() {
  QUnit.assert.equals = QUnit.assert.equal;
  QUnit.assert.notEquals = QUnit.assert.notEqual;

  QUnit.assert.exists = function(actual, message) {
    const htmlElement = parseActual(actual);
    let found;

    if (isArray(htmlElement))
      found = htmlElement.length > 0;
    else
      found = !isBlank(htmlElement);

    this.pushResult({
      result: found,
      actual: found,
      expected: 'At least one exists',
      message
    });
  };

  QUnit.assert.numExists = function(actual, count, message) {
    const htmlElement = parseActual(actual);

    if (!htmlElement) {
      this.pushResult({
        result: false,
        actual: 0,
        expected: count,
        message
      });
    } else {
      let length;

      if (htmlElement.childElementCount)
        length = htmlElement.childElementCount;
      else
        length = htmlElement.length;

      this.pushResult({
        result: length === count,
        actual: length,
        expected: count,
        message
      });
    }
  };

  QUnit.assert.notExists = function(actual, message) {
    const htmlElement = parseActual(actual);

    if (!htmlElement) {
      this.pushResult({
        result: true,
        actual: 0,
        expected: 'None exists',
        message
      });
    } else {
      let length;

      if (htmlElement.childElementCount)
        length = htmlElement.childElementCount;
      else
        length = htmlElement.length;

      this.pushResult({
        result: length === 0,
        actual: length,
        expected: 'None exists',
        message
      });
    }
  };

  QUnit.assert.isVisible = function(actual, message) {
    const el = parseActual(actual);
    let elIsVisible = false;

    if (el) {
      const elStyle = el[0].style;

      if (elStyle) {
        elIsVisible = elStyle.visibility !== 'hidden';
      }
    }

    this.pushResult({
      result: elIsVisible,
      actual: elIsVisible,
      expected: true,
      message
    });
  };

  QUnit.assert.isHidden = function(actual, message) {
    const el = parseActual(actual);
    let elIsHidden = true;

    if (el) {
      const elStyle = el[0].style;

      if (elStyle) {
        elIsHidden = elStyle.visibility === 'hidden';
      }
    }

    if (isEmpty(el))
      this.pushResult({
        result: true,
        actual: el,
        expected: true,
        message
      });
    else
      this.pushResult({
        result: elIsHidden,
        actual: elIsHidden,
        expected: true,
        message
      });
  };

  QUnit.assert.isPresent = function(actual, message) {
    this.pushResult({
      result: isPresent(actual),
      actual,
      expected: true,
      message
    });
  };

  QUnit.assert.isBlank = function(actual, message) {
    this.pushResult({
      result: isBlank(actual),
      actual,
      exected: true,
      message
    });
  };

  QUnit.assert.includes = function(actual, expected, message) {
    const type = typeOf(actual);

    if (type !== 'string' && type !== 'array') {
      throw 'Object does not appear to be a string or array';
    }

    this.pushResult({
      result: actual.indexOf(expected) > -1,
      actual,
      expected,
      message
    });
  };
  QUnit.assert.contains = QUnit.assert.includes;

  QUnit.assert.notIncludes = function(actual, expected, message) {
    if (isBlank(actual)) {
      actual = [];
    }

    const objType = typeOf(actual);

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
    let el = parseActual(actual);

    if (isArray(el)) {
      el = el[0];
    }

    const actualClasses = Array.from(el.classList);
    const result = actualClasses.indexOf(expected) > -1;

    this.pushResult({
      result,
      actual: actualClasses,
      expected,
      message
    });
  };
  QUnit.assert.classContains = QUnit.assert.classIncludes;

  QUnit.assert.classNotIncludes = function(actual, expected, message) {
    let el = parseActual(actual);

    if (isArray(el)) {
      el = el[0];
    }

    const actualClasses = Array.from(el.classList);
    const result = actualClasses.indexOf(expected) === -1;

    this.pushResult({
      result,
      actual: actualClasses,
      expected,
      message
    });
  };
  QUnit.assert.classNotContains = QUnit.assert.classNotIncludes;

  QUnit.assert.tableContains = tableContainsHelper;
}
