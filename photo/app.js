const path = require('path');
const os = require('os');
const fs = require('fs');

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234)


// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const folder = process.argv[2];
const workingDir = path.join(__dirname, folder);

// 폴더가 존재하지 않거나 fs에 존재하지 않는 경로라면 에러를 출력
if (!folder || !fs.existsSync(workingDir)) {
    console.error('Please enter folder name in Pictures');
    return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 폴더를 만들고 파일들을 처리해줘야하기 때문에 -> 동기적으로 처리를 해줘야하기 때문에
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234)
fs.promises
    .readdir(workingDir)
    .then(processFiles)
    .catch(console.error);

function processFiles(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            move(file, capturedDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    });
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match; // match가 null이면 false, 값이 있으면 true
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedFile(files, file) {
    // IMG_XXXX -> IMG_EXXXX
    // IMG_로 시작하지 않는다면 false 반환
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    // IMG_XXXX -> XXXX -> EXXXX
    const edited = `IMG_E${file.split('_')[1]}`;

    // edited가 files에 존재한다면 true 반환
    const found = files.find((f) => f.includes(edited));
    return !!found;
}

// 파일을 옮기는 함수
function move(file, targetDir) {
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    fs.promises
        .rename(path.join(workingDir, file), path.join(targetDir, file))
        .catch(console.error);
}