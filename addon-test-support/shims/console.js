export default function() {
  // Thanks IE!
  if (!window.console) {
    window.console = {
      log() {}
    };
  }
}
