// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
console.log(a++);
console.log(a);
let b = a++; // b에 a가 0인 것을 먼저 연산한 후 a 값이 1로 증가
console.log(b);
console.log(a);
