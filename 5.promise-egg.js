function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}
function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'));
  //   return Promise.resolve(`π» => π`);
}

// fetchEgg('π') // Tip: μ£Όμμ²λ¦¬νλ©΄ μ μ₯νμ λ thenμ΄ μλ‘ μμ¬λΌμ΄
//   .then((egg) => console.log(egg));

getChicken()
  .catch(() => 'π')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

// getChicken()
//   .catch((error) => {
//     console.log(error.name);
//     return 'π';
//   })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));
// .catch((error) => console.log(error.name)); // catchκ° μ € μμ μκ³  μλ μμ λ
