// 코드가 진행된 뒤 0초 후에 실행된다.
console.log('code1');
setTimeout(() => {
    console.log('setTimeout 0');
}, 0);

// setTimeout과 별 차이가 없다.
// setTimeout은 정확하게 0초를 보장할 수 없기 때문에 setImmediate를 사용한다.
console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

// 우선순위가 제일 높다.
console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick');
});
