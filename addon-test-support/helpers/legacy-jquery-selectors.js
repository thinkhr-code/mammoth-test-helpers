import { findAll } from '@ember/test-helpers';
import { isArray } from '@ember/array';

function contains(selector, text) {
  let elements = selector;

  if (typeof selector === 'string') {
    elements = findAll(selector);
  }

  if (!isArray(elements)) {
    elements = [elements];
  }

  return [].filter.call(elements, function(element){
    return element.textContent.indexOf(text) > -1;
  });
}

// @NOTE If you think you need this, you probably should be looking at a different solution!
function getSiblings(el) {
  const siblings = [];

  el = el.parentNode.firstChild;
  do {
    siblings.push(el);
  } while (el = el.nextSibling);

  return siblings;
}
export { contains, getSiblings };
