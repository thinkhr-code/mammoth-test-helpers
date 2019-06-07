import { isBlank } from '@ember/utils';

function buildError(message, actual, row, column) {
  return `Attempted to ${ message } at table row ${ row }, column ${ column }, but ${ actual } was found`;
}

export default function(actualTable, rules, message) {
  const results = [];

  if (rules.body) {
    let body = actualTable.querySelector('tbody');

    if (!body || body.length === 0)
      body = actualTable;

    rules.body.forEach((rowRule, row) => {
      if (isBlank(rowRule)) {
        return;
      }

      rowRule.forEach((cellRule, column) => {
        if (isBlank(cellRule)) {
          return;
        }

        const cell = body.querySelectorAll('tr')[row].querySelectorAll('td')[column];

        if (cell.length === 0) {
          results.push(buildError('find a cell', 'nothing', row, column));
        }

        const cellText = cell.textContent;

        if (cellText.indexOf(cellRule) === -1) {
          results.push(buildError(`find a cell with '${ cellRule }'`, `'${ cellText }'`, row, column));
        }
      });
    });
  }

  // @TODO thead

  this.pushResult({
    expected: true,
    result: results.length === 0,
    actual: results.join('; '),
    message
  });
}
