const arr = [
  {id: 'a'}, 
  {id: 'b'},
  {id: 'c'}
];

const index = arr.findIndex(object => {
  return object.id === 'c';
});

console.log(index); // 👉️ 1
