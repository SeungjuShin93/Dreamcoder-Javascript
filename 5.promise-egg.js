function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //   return Promise.resolve(`🌻 => 🐓`);
}

// fetchEgg('🐔') // Tip: 주석처리하면 저장했을 때 then이 위로 안올라옴
//   .then((egg) => console.log(egg));

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

// getChicken()
//   .catch((error) => {
//     console.log(error.name);
//     return '🐔';
//   })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));
// .catch((error) => console.log(error.name)); // catch가 젤 위에 없고 아래 있을 때
