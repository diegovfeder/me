const fetchUsers = fetch('data/users.json');
const fetchUsers = fetch('data/colors.json');

Promise.all([fetchUsers, fetchColors]).then(value => {
  return Promise.all(values.map(value => value.json()));
}).then(([users, colors]) => {
  console.log(users, colors);
}).catch(e => {
  console.log('Caught!', e);
})
