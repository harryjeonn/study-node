// 고정된 사이즈의 메모리 덩어리를 만들어서 데이터를 넣는다.
// 데이터가 꽉 차면 다음 버퍼를 만든다.
// 버퍼의 사이즈가 작으면 데이터를 여러번 나눠서 보내야 한다.
// 버퍼의 사이즈가 크면 메모리 낭비가 심하다.
// 버퍼의 사이즈를 적절하게 잘 조절해야 한다.

const stringData = '버퍼 테스트';
const buffer = Buffer.from(stringData);
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

// create
const buffer2 = Buffer.alloc(2); // Size가 2개인 버퍼를 만든다. (빈 버퍼)
const buffer3 = Buffer.allocUnsafe(2); // 빠르지만 기존에 데이터가 들어있을 수 있다.
buffer2[0] = 72; // H
buffer2[1] = 105; // i
buffer2.copy(buffer3);
console.log(buffer2.toString());
console.log(buffer3.toString());

// concat
// 버퍼를 모은다.
const newBuffer = Buffer.concat([buffer, buffer2, buffer3]);
console.log(newBuffer.toString());