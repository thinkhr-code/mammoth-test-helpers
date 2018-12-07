const head = { 'Content-Type': 'application/json' };

function asJson(hash) {
  return JSON.stringify(hash);
}

export { head, asJson };
