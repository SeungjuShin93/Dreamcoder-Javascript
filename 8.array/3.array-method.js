// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍇'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍌'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);
// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 샂게
const deleted = fruits.splice(1, 1); // [1] 째부터 1개 삭제
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 0, '🍎', '🍓'); // [1] 부터 0개 삭제하고 그 뒤로 사과와 딸기 추가
console.log(fruits); // 배열 자체를 수정(업데이트)
fruits.splice(0, 1, '🍋', '🍑'); // 바나나 삭제 후 레몬 복숭아 추가
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 0포함 시작해서 2를 포함하지 않고 그 전, 0 =< x < 2 이런 느낌
console.log(newArr); // 레몬과 복숭아만으로 이루어진 배열
newArr = fruits.slice(); // 배열 전체가 반환
console.log(newArr);
newArr = fruits.slice(1); // [1]부터 반환
console.log(newArr);
newArr = fruits.slice(-1); // 뒤에서부터 한칸
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
console.log(arr);
console.log(arr.flat()); // 1단계 까지만 flat 해줌
console.log(arr.flat(2)); // 2단계 까지 flat 해줌
console.log(arr.flat(3)); // 3단계 까지 flat 해줌
arr = arr.flat(3);
// 특정한 값으로 배열을 채우기
arr.fill(0); // ㅂ여
console.log(arr);

arr.fill('s', 1, 3); // 1 <= x < 3 까지 채워줌
console.log(arr);

arr.fill('s', 1); // [1] 부터 끝까지 채워줌
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
