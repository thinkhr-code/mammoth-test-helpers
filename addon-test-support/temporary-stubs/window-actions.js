const defaultConfirm = window.confirm;
const defaultAlert = window.alert;

function stubConfirm(cb) {
  window.confirm = function(message) {
    if (cb) {
      return cb(message);
    } else {
      return false;
    }
  };
}

function unstubConfirm() {
  window.confirm = defaultConfirm;
}

function stubAlert(cb) {
  window.alert = function(message) {
    if (cb) {
      cb(message);
    }
  };
}

function unstubAlert() {
  window.alert = defaultAlert;
}

/**
  @TODO:
   File
   FormData
   Stripe
   scrollTo
*/

export { stubConfirm, unstubConfirm, stubAlert, unstubAlert };
