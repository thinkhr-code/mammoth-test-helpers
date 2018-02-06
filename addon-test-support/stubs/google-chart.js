export default function stubGoogleCharts() {
  const stubDraw = {
    draw() {}
  };

  window.google = {
    load(chart, num, options) {
      if (options.callback) {
        options.callback();
      }
    },

    visualization: {
      'ColumnChart'() {
        return stubDraw;
      },
      'LineChart'() {
        return stubDraw;
      },
      'BarChart'() {
        return stubDraw;
      },
      'PieChart'() {
        return stubDraw;
      },
      'AreaChart'() {
        return stubDraw;
      },

      NumberFormat() {
        return {
          format() {}
        };
      },

      DataTable() {
        return {
          addColumn() {},
          addRows() {},
          addRow() {},
        };
      },
    }
  };
}
