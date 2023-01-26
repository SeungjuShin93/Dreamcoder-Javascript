// 사용예제1
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
  /*   const result = num1 + num2;
     return result; */
}
const result = add(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName} 👌`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));
