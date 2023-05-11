const EventEmitter = require('events'); // events 모듈을 가져온다.
const emitter = new EventEmitter(); // EventEmitter 객체를 생성한다.

const callback1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('harry', callback1); // 이벤트를 등록한다.

// 이벤트를 등록한다.
emitter.on('harry', (args) => {
    console.log('second callback - ', args);
});

// 이벤트를 실행한다.
emitter.emit('harry', { message: 1 });
emitter.emit('harry', { message: 2 });
emitter.removeListener('harry', callback1); // 이벤트를 제거한다.
emitter.removeAllListeners(); // 이벤트를 모두 제거한다.
emitter.emit('harry', { message: 3 });
