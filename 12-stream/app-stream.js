const fs = require('fs');

// const readStream = fs.createReadStream('./file.txt', {
//     // highWaterMark: 8, // 한번에 얼마만큼의 데이터를 읽어올 수 있는지, 기본 값 -> 64kib, 설정 값 -> 8byte
//     // encoding: 'utf-8', // encoding을 설정하면 data를 string으로 받아온다.
// });

// const data = [];
// readStream.on('data', chunk => {
//     // console.log(chunk);
//     data.push(chunk);
//     console.count('data');
// });

// readStream.on('end', () => {
//     console.log(data.join(''));
// });

// readStream.on('error', error => {
//     console.log(error);
// });

// 체이닝 한 소스
const data = [];
const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 한번에 얼마만큼의 데이터를 읽어올 수 있는지, 기본 값 -> 64kib, 설정 값 -> 8byte
    // encoding: 'utf-8', // encoding을 설정하면 data를 string으로 받아온다.
}).on('data', chunk => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
});

// 덩어리로 받은 데이터를 조각조각으로 나눠서 받아온다.
// 'data'라는 이벤트가 발생할 때마다 data배열에 넣어준다.
// 'end'이벤트가 발생하면 data배열을 join해서 출력해준다.