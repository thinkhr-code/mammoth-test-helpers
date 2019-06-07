import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';

module('helpers/assert-helpers', function(hooks) {
  setupRenderingTest(hooks);

  test('assert.equals', function(assert) {
    assert.expect(1);

    assert.equals(1, 1, 'it works');
  });

  test('assert.notEquals', function(assert) {
    assert.expect(1);

    assert.notEquals(1, 2, 'it works');
  });

  test('assert.exists', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <div class="test-div" />
    `);
    assert.exists('.test-div', 'it works');
  });

  test('assert.numExists', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <div class="foo"></div><div class="foo"></div>
    `);

    assert.numExists('.foo', 2, 'it works');
  });

  test('assert.notExists', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <div class="foo"></div>
    `);

    assert.notExists('.foo-bar', 'it works');
  });

  test('assert.isVisible / assert.isHidden', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <div class="test-div" style="visibility: default;" />
    `);

    assert.isVisible('.test-div', 'isVisible works');

    this.element.querySelector('.test-div').style.visibility = 'hidden';

    assert.isHidden('.test-div', 'isHidden works');
  });

  test('assert.isPresent', function(assert) {
    assert.expect(1);

    assert.isPresent([1], 'it works');
  });

  test('assert.isBlank', function(assert) {
    assert.expect(1);

    assert.isBlank([], 'it works');
  });

  test('assert.includes / assert.foo.contains', function(assert) {
    assert.expect(2);

    assert.includes(['foo', 'bar'], 'foo', 'it works');
    assert.contains(['foo', 'bar'], 'foo', 'it works');
  });

  test('assert.notIncludes / assert.notContains', function(assert) {
    assert.expect(2);

    assert.notIncludes(['bar'], 'foo', 'it works');
    assert.notContains(['bar'], 'foo', 'it works');
  });

  test('assert.classIncludes / assert.classContains', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <span class="foo"/>
    `);

    assert.classIncludes('span', 'foo', 'it works');
    assert.classContains('span', 'foo', 'it works');
  });

  test('assert.classNotIncludes / assert.classNotContains', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <span class="foo"/>
    `);

    assert.classNotIncludes('span', 'bar', 'it works');
    assert.classNotContains('span', 'bar', 'it works');
  });

  test('assert.tableContains', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    `);

    assert.tableContains(find('table'), {
      body: [
        [1,2],
        [3]
      ]
    });
  });

  test('assert.tableContains - with a null cell', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    `);

    assert.tableContains(find('table'), {
      body: [
        [1,2],
        [null, 4]
      ]
    });
  });

  test('assert.tableContains - with a null row', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    `);

    assert.tableContains(find('table'), {
      body: [
        [1,2],
        null,
        [5,6]
      ]
    });
  });

  test('assert.tableContains - without a tbody', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
      </table>
    `);

    assert.tableContains(find('table'), {
      body: [
        [1,2],
      ]
    });
  });
});
