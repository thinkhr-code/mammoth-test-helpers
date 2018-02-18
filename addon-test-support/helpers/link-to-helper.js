import LinkComponent from '@ember/routing/link-component';
import properties from './link-to-properties';

export default function addHelper() {
  LinkComponent.reopen(properties);
}
