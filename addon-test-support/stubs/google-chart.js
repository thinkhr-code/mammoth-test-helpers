export default function stubGoogleCharts() {
  const stubDraw = {
    draw() {}
  };
  const factory = window.google = function() {};

  factory.load = function(chart, num, options) {
    if (options.callback) {
      options.callback();
    }
  };

  factory.visualization = function() {};
  factory.visualization.ColumnChart = function() {
    return stubDraw;
  };
  factory.visualization.LineChart = function() {
    return stubDraw;
  };
  factory.visualization.BarChart = function() {
    return stubDraw;
  };
  factory.visualization.PieChart = function() {
    return stubDraw;
  };
  factory.visualization.AreaChart = function() {
    return stubDraw;
  };

  factory.visualization.NumberFormat = function() {
    return {
      format() {}
    };
  };

  factory.visualization.DataTable = function() {
    return {
      addColumn() {},
      addRows() {},
      addRow() {},
    };
  };
}
