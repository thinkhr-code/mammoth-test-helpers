import assertHelpers from './helpers/assert-helpers';
import consoleShim from './shims/console';

const queuedHelpers = [assertHelpers, consoleShim];
let hasRun = false;

export function addToQueue(fn) {
  if (typeof fn !== 'function') {
    throw 'Error, tried to add a non-function to prep-tests queue';
  }

  queuedHelpers.push(fn);
}

export default function() {
  if (hasRun) {
    return;
  }

  hasRun = true;

  queuedHelpers.forEach(helper => helper());
}
