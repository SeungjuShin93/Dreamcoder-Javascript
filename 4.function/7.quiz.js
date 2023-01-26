// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
/* function log(num) {
  console.log(num);
}
iterate(3, log); */
iterate(3, (num) => console.log(num));

/* iterate(3, doubleAndLog);
function doubleAndLog(num) {
  console.log(num * 2);
} */
iterate(3, (num) => console.log(num * 2));

// 콜백 함수의 실 사용 예제
setTimeout(() => {
  console.log('1초뒤 이 함수가 실행될거예요');
}, 1000);

// 제일 위에 있던 이 거는
/*
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
} */
// 나중에 배열 편에서 배우게 되는 forEach 함수와 비슷
/* function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
} */
