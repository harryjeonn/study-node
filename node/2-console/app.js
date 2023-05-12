console.log('logging....');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert, 특정한 조건에 맞게 출력된다.
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' }};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 }); // depth: 0 어떤 객체 안에 있는 것들을 몇 단계까지 보여줄 것인지

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function'); // 몇번 호출되었는지 출력
}

a();
console.countReset('a function'); // count를 초기화
a();

// trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace(); // 어디서 호출되었는지 알려줌
}

f1();