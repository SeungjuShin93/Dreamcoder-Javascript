// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 && obj2) {
  console.log('둘다 true!');
}

// 조건문 밖에서 논리연산자가 사용되었을 때는 단축평가가 됨
let result = obj1 && obj2; // obj1이 true라서 obj2가 result에 할당
console.log(result);

result = obj1 || obj2; // obj1이 true니까 뒤에는 확인안하고 obj1이 result에 할당
console.log(result);

result = false || obj2; // 앞에가 false면 당연히 바로 뒤 obj2를 result에 할당
console.log(result);

// 활용예제
// 조건이 truthy일때 && 무언가를 해야할 경우
// 조건이 falshy일때 || 무언가를 해야할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1); // 앞에가 false기 때매 뒤에 실행 되지 않음
obj2.owner && changeOwner(obj2); // 앞에가 True 여서 뒤에꺼 실행
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); // 앞에가 False기 때매 뒤에꺼 실행
obj2.owner || makeNewOwner(obj2); // 앞에가 True기 때매 뒤에꺼 실행 되지 않음
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  //   console.log(message);
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
