// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
// 위와 아래는 같은 결과가 나옴
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 중복이 안되서 무시가 됨
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈1, set에 중복이 될까~? price는 변경이 될까~?
obj1.price = 10;
objs.add(obj1);
console.log(objs);
// 얕은 복사 Shallow Copy, 가격은 변경, obj1은 추가되지 않음

// 퀴즈2, obj2와 같은 것을 만들고 나서는 set에 추가가 될까?
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
