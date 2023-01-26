// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
// 위 예제에서는 function sum(a, b) 이렇게 함수 sum 이름을 붙여줘도 되지만
// 의미가 없음, 왜냐면 let add, 즉 add라는 이름으로만 사용 가능하기 때문

// 화살표 함수 const name = () => { }
// add = (a, b) => a + b; 값만 바로 리턴하는 경우 이렇게 사용 가능
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})();
