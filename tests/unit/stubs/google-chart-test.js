import { module, test } from 'qunit';

module('stubs/google-chart', function() {
  test('it exists', function(assert) {
    assert.expect(11);

    assert.isPresent(window.google);
    assert.isPresent(window.google.visualization);
    assert.isPresent(window.google.visualization['BarChart']);
    assert.isPresent(window.google.visualization['BarChart']().draw);
    assert.isPresent(window.google.visualization['PieChart']().draw);
    assert.isPresent(window.google.visualization['AreaChart']().draw);
    assert.isPresent(window.google.visualization['NumberFormat']().format);
    assert.isPresent(window.google.visualization['DataTable']);
    assert.isPresent(window.google.visualization['DataTable']().addColumn);
    assert.isPresent(window.google.visualization['DataTable']().addRows);
    assert.isPresent(window.google.visualization['DataTable']().addRow);
  });
});
