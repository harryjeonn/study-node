// video 폴더 안에는 .mp4, .mov 파일
// captured 폴더 안에는 .png, .aae 파일
// duplicated 폴더 안에는 중복된 파일

const fs = require('fs').promises;

const dirName = process.argv.slice(2);
const data = [];
const readDir = fs.readdir(__dirname + '/' + dirName[0])
    .then(files => {
        saveData(files);
        divisionData();
    })
    .catch(console.error);

function saveData(files) {
    files.forEach(file => {
        data.push(file);
    });
}

function divisionData() {
    data.forEach(file => {
        if (file.includes('.mp4') || file.includes('.mov')) {
            checkDirectory(file);
        } else if (file.includes('.png') || file.includes('.aae')) {
            console.log('captured');
        } else if (file.includes('(1)')) {
            console.log('duplicated');
        }
    });
}

function checkDirectory(file) {
    console.log(fs.readdir(__dirname + '/' + dirName[0] + '/video'));
    fs.readdir(__dirname + '/' + dirName[0] + '/video')
        .then(moveToVideo(file))
        .catch(console.error);
}

function moveToVideo(file) {
    fs.rename(__dirname + '/' + dirName[0] + '/' + file, __dirname + '/' + dirName[0] + '/video/' + file)
        .then(() => console.log('move to video'))
        .catch(console.error);
}