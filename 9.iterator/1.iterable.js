// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 연산자 사용 가능
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
// obj는 iterable 하지 않아서 for...of, spread 사용 불가능
// 대신 for in 은 사용 가능 Key를 출력함
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // Key를 출력
  console.log(item);
}

// const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }

const iterator = array.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// console.log(iterator.next().value);
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
