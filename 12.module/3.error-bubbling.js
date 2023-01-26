// Bubbling up, Propagating 🚦 (에러가 전파되는? 느낌)
function a() {
  throw new Error('error!');
}

function b() {
  a();
  //   try {
  //     a();
  //   } catch (error) {
  //     console.log(error);
  //   }
}

// function b(){
//     try{
//         a();
//     } catch (error){
//         console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
//         throw error;
//     }
// }

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
