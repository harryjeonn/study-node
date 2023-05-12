const fs = require('fs');

/* 
    rename의 세 가지 방법
    1. renameSync(....)
    2. rename(...., callback(error, data))
       try { renameSync(....) } catch(e) { }
    3. promises.rename().then().catch(0)
*/

// 저번 강의에서 배웠던 폴더 경로 활용해서 text파일 경로 설정

// 1. renameSync
try {
    fs.renameSync(__dirname + '/text.txt', __dirname + '/text-new.txt');
} catch (error) {
    console.error(error);
}

// 2. rename
fs.rename(__dirname + '/text-new.txt', __dirname + '/text.txt', (error) => {
    if (error != null) {
        console.error(error);
    }
});

// 3. promises.rename
fs.promises
    .rename(__dirname + '/text2.txt', __dirname + '/text2-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);

// Sync는 별로 사용하지 않고 비동기적인 방법을 사용하는 것이 좋다.