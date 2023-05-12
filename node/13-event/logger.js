const EventEmitter = require("events"); // events 모듈을 가져온다.
// const emitter = new EventEmitter(); // EventEmitter 객체를 생성한다.

class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
