let defaultConfirm = window.confirm;
let defaultAlert = window.alert;

function stubConfirm(cb) {
  defaultConfirm = window.confirm;

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
  defaultAlert = window.alert;

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
