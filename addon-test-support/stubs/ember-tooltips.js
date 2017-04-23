import Component from 'ember-component';

/**
  The tooltip component needs a lot of dependencies.  We shouldn't be testing it
  in unit tests anyways...
*/
export default function(context) {
  context.register('component:tooltip-on-element',   Component.extend());
  context.register('component:tooltip-on-component', Component.extend());
  context.register('component:popover-on-element',   Component.extend());
  context.register('component:popover-on-component', Component.extend());
}
