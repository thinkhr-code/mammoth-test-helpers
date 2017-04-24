export const head = { 'Content-Type': 'application/json' };

export function asJson(hash) {
  return JSON.stringify(hash);
}
