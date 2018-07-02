import Component from '@ember/component';

/**
  The tooltip component needs a lot of dependencies.  We shouldn't be testing it
  in unit tests anyways...
*/
export default function(context) {
  context.register('component:ember-tooltip',   Component.extend());
  context.register('component:ember-popover', Component.extend());
}
