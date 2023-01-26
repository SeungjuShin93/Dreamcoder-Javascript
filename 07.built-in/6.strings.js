const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // l은 H-0, e-1, l-2 그래서 2가 나옴
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('h'));
console.log(text.startsWith('H'));
console.log(text.startsWith('He'));

console.log(text.endsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // a부터 b까지 근데 b는 포함 안함
console.log(text.slice(2)); // 앞을 잘라 냄
console.log(text.slice(-2)); // 뒤를 잘라 냄

const space = '             space       ';
console.log(space.trim()); // 공백 제거

const longText = 'Get to the point';
console.log(longText.split(' ')); // 공백 간격 기준으로 split 해서 배열 만듬
console.log(longText.split(' ', 2)); // 2덩어리만 전달
const longText2 = 'Get to the, point';
console.log(longText2.split(',', 2)); // 콤마 기준으로 split
console.log(longText2.split(', ', 2)); // 콤마랑 space 기준으로 split
