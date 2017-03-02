export default function stubStripe() {
  window.Stripe = {
    setPublishableKey() {}
  };
};
