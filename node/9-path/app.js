const path = require('path');

console.log(__dirname); // 파일 경로
console.log(__filename); // 파일명까지 포함한 경로

console.log(path.sep); // 경로의 구분자
console.log(path.delimiter); // 환경 변수의 구분자

// basename
console.log(path.basename(__filename)); // 파일명
console.log(path.basename(__filename, '.js')); // 파일명에서 확장자 제거

// dirname
console.log(path.dirname(__filename)); // 디렉터리 경로

// extension
console.log(path.extname(__filename)); // 확장자

// parse
const parsed = path.parse(__filename); // 파일 경로를 root, dir, base, ext, name으로 분리
console.log(parsed);

const str = path.format(parsed); // path.parse()한 객체를 파일 경로로 합침
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대 경로인지 확인
console.log('isAbsolute?', path.isAbsolute('../')); // 상대 경로인지 확인

// normalize
console.log(path.normalize('./folder/////sub')); // /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환

// join
console.log(__dirname + path.sep + 'image'); // OS별로 경로 구분자가 다르기 때문에 path.join()을 사용하는 것이 좋다.
console.log(path.join(__dirname, 'image')); // 여러 인자를 넣으면 하나의 경로로 합침