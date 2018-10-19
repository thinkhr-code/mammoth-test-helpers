const reset = '\x1b[0m';
const green = '\x1b[32m';
const red = '\x1b[31m';
const yellow = '\x1b[33m';
const cyan = '\x1b[36m';
const magenta = '\x1b[35m';

module.exports = class Reporter {
  constructor(out) {
    this.out = out || process.stdout;
    this.total = 0;
    this.pass = 0;
    this.fail = 0;
    this.pending = 0;
    this.failureMessages = [];
  }

  report(prefix, data) {
    if (data.passed) {
      this.total++;
      this.pass++;
      this._write('.', green);

    } else if (data.pending) {
      this.total++;
      this.pending++;
      this._write('*', yellow);

      // Global failure, we want to log immediately so that we don't have duplicate messages in the summary
    } else if (data.name.indexOf('Global') === 0) {
      console.log(data.name)

    } else if (data.failed) {
      this.total++;
      this.fail++;

      const messages = [data.name];

      if (data.error && data.error.message) {
        messages.push(data.error.message);
        messages.push(data.error.stack);
      }

      this.failureMessages.push(messages);
      this._write('F', red);

      // :shrug:
    } else {
      this.total++;
      console.log(data.name)
    }
  }

  finish() {
    this._writeNewLine();
    this._writeLine(this.pass + '/' + this.total + ' tests passed', cyan);
    this._writeLine(`Skipped ${this.pending} pending tests`, cyan);

    if (this.fail > 0) {
      this._writeErrors();
    } else {
      this._writeLine('No errors :dance:', green);
    }
  }

  _write(text, color = '') {
    this.out.write(color + text + reset);
  }

  _writeLine() {
    this._write(...arguments);
    this._writeNewLine();
  }

  _writeNewLine() {
    this.out.write('\n');
  }

  _writeErrors() {
    this._writeLine(`${ this.fail } test(s) failed`, red);

    this.failureMessages.forEach(messages => {
      messages.forEach((message, index) => {
        const color = index === 0 ? red : '';

        this._writeLine(message, color);
      });
      this._writeNewLine();
    });
  }
}
