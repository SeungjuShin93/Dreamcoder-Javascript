const num1 = 123;
const num2 = new Number(123); // 이건 사실 메모리 낭비
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}
if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 숫자를 아랍어로 변환

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법으로 반환

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
} // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
const num = 0.1 + 0.2 - 0.2; // ?
console.log(num); // 결과를 보면 오차가 있음
// 이런 작은 오차를 나타내는 것을 EPSILON 이라고 이해해도 좋음

function isEqual(original, expected) {
  //   return original === expected;
  //   return original - expected < Number.EPSILON;
  return Math.abs(original - expected) < Number.EPSILON; // 절대 값으로 나타냄
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); // num이 0.1이라 예상되지만 false
// 그래서 마지막 값이 true가 되려면 original - expected < Number.EPSILON; 이렇게 작성해야 함
