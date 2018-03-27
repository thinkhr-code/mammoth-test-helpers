import { run } from '@ember/runloop';

export default async function betterFocus(el) {
  await run(() => {
    el.focusin();
  });
}
