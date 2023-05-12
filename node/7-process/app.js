const process = require('process');

// Process의 다양한 정보를 가져올 수 있다.
console.log(process.version);
console.log(process.execPath);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// Process의 다양한 메소드를 사용할 수 있다.

// 코드가 모두 실행된 뒤 0초후에 실행된다.
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// Task Queue에 제일 앞 부분에 넣는다.
process.nextTick(() => {
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log('for loop');
}
