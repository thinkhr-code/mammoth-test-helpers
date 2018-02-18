import {
  click as emberClick,
  tap as emberTap,
  triggerKeyEvent as emberTriggerKeyEvent,
  triggerEvent as emberTriggerEvent,
  fillIn as emberFillIn,
  focus as emberFocus,
  blur as emberBlur
} from '@ember/test-helpers';
import jqueryFind from 'jquery';
import { isBlank } from '@ember/utils';

function find(selector, throwOnMissing = false) {
  const element = jqueryFind(selector);

  if (throwOnMissing && isBlank(element))
    throw `Error: tried to find ${ selector } but none was found`;

  return element;
}

export function click(selector, ...args) {
  return emberClick(find(selector, true)[0], ...args);
}

export function tap(selector, ...args) {
  return emberTap(find(selector, true)[0], ...args);
}

export function triggerKeyEvent(selector, ...args) {
  return emberTriggerKeyEvent(find(selector, true)[0], ...args);
}

export function triggerEvent(selector, ...args) {
  return emberTriggerEvent(find(selector, true)[0], ...args);
}

export function fillIn(selector, ...args) {
  return emberFillIn(find(selector, true)[0], ...args);
}

export function focus(selector, ...args) {
  return emberFocus(find(selector, true)[0], ...args);
}

export function blur(selector, ...args) {
  return emberBlur(find(selector, true)[0], ...args);
}

export { find };
