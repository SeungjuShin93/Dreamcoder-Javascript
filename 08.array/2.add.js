const fruits = ['๐', '๐', '๐', '๐'];

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['๐', '๐', '๐', '๐'];
// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ โ๐
fruits[3] = '๐'; // ์ค์๋ก ๋ฎ์ด ์์ธ ์๋ ์์
fruits[6] = '๐';
console.log(fruits);

delete fruits[1];
console.log(fruits); // ๋น ๊ณต๊ฐ์ด ๋๊ณ  <1 empty item> ์ด๋ผ๊ณ  ๋์ด
