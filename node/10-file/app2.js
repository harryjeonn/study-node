const fs = require("fs").promises;

// 1. 파일 읽기
// utf8을 설정하지 않으면 Buffer로 읽어온다.
fs.readFile(__dirname + "/text.txt", "utf8")
  .then(console.log)
  .catch(console.error);

// 2. 파일 쓰기
// writeFile은 파일이 없으면 새로 만들고, 있으면 덮어쓴다.
fs.writeFile(__dirname + "/text.txt", "Hello, Dream Coders!")
  .catch(console.error);

fs.appendFile(__dirname + "/text.txt", "Yo, Dream Coders!")
  .then(() => {
    fs.copyFile(__dirname + "/text.txt", __dirname + "/file.txt")
      .catch(console.error);
  })
  .catch(console.error);

// 3. 파일 복사
// copyFile(복사할 파일 경로, 복사될 경로)
// 비동기적으로 실행되기 때문에 파일을 다 쓰면 복사하는 걸로 변경
// fs.copyFile(__dirname + "/text.txt", __dirname + "/file.txt")
//   .catch(console.error);

// 4. 폴더 만들기
// mkdir(폴더 경로, 옵션, 콜백)
// 옵션은 잘 사용하지 않는다.
fs.mkdir('sub-folder')
  .catch(console.error);

// 5. 폴더 읽기
// readdir(폴더 경로, 옵션, 콜백)
fs.readdir(__dirname)
  .then(console.log)
  .catch(console.error);