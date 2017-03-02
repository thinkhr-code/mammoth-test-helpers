import Ember from 'ember';
import properties from './link-to-properties';

export default function addHelper() {
  Ember.LinkComponent.reopen(properties)
};
