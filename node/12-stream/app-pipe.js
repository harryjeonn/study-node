const fs = require('fs'); // 파일 시스템 모듈
const zlib = require('zlib'); // 파일 압축 모듈

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on('finish', () => {
    console.log('done!');
});

const http = require('http'); // http 모듈
const server = http.createServer((req, res) => { // 서버 생성
    const stream = fs.createReadStream('./file.txt'); // 파일을 읽어서
    stream.pipe(res); // res에 연결
});
server.listen(3000); // 서버를 3000번 포트로 연결