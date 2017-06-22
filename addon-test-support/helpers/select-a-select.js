import { parseActual } from './assert-helpers';

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
  const select = parseActual(element);
  let option;

  if (!select) {
    throw `Select not found: ${ element }`;
  }

  if ('function' === typeof item) {
    option = item(select);
  } else {
    option = select.find(`option:eq(${ item })`);
  }

  option.prop('selected', true);
  select.trigger('change');
}
