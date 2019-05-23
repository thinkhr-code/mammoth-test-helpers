import { parseActual } from './assert-helpers';
import { run } from '@ember/runloop';
import { isArray } from '@ember/array';

function fireEvent(element, event) {
  // dispatch for firefox + others
  const evt = document.createEvent('HTMLEvents');

  evt.initEvent(event, true, true); // event type,bubbling,cancelable
  return !element.dispatchEvent(evt);
}

/**
  Examples:
  selectASelect('.foo-select', 5);
  selectASelect($('.foo-select'), select => select.find('option[value="Bar"]'))

  @note passing a function to item only works on acceptance tests.
  @param [String, $] element
  @param [Integer, Function] item
  @return [$]
*/
export default function selectASelect(element, item) {
  let select = parseActual(element);
  let option;

  if (!select) {
    throw `Select not found: ${element}`;
  }

  if (isArray(select) && select.tagName !== 'SELECT') {
    select = select[0];
  }

  if ('function' === typeof item) {
    option = item(select);
  } else {
    option = select.getElementsByTagName('option')[item];
  }

  if (!option)
    throw 'selectASelect could not find an option for target select';

  run(() => {
    option.setAttribute('selected', 'selected');
    fireEvent(option, 'change');
  });
}
