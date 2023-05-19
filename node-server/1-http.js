// http 모듈 사용
const http = require("http");

// http 모듈로 서버 생성
const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/html") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hello, World!</h1>");
    res.write("</body>");
    res.write("</html>");
  } else if (url === "/courses") {
    res.write("Courses");
  } else {
    res.write("Not Found");
  }
  res.end();
});

// 서버를 8080 포트로 listen
server.listen(8080);
