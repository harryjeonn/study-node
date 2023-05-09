// Node Module임을 알림
const fs = require('fs');

console.log(global);

global.hello = () => {
    console.log('hello');
}

global.hello();
hello();