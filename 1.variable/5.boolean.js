// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear(); // 앞에 작성된 console.log 값을 clear
// Falshy 거짓인 값, !! 느낌표 두개 사용하면 boolean 값을 나타냄
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); // 오브젝트
console.log(!!Infinity);
