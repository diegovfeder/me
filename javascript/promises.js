const fetchUsers = fetch("data/users.json");
const fetchColors = fetch("data/colors.json");

Promise.all([fetchUsers, fetchColors])
  .then((value) => {
    return Promise.all(values.map((value) => value.json()));
  })
  .then(([users, colors]) => {
    console.log(users, colors);
  })
  .catch((e) => {
    console.log("Caught!", e);
  });

/**
 * A simple dummy function that
 * fetches data from multiple
 * endpoints related to a user.
 */
async function fetchUserData(id) {
  // A simple array of promises.
  // The first two parameters are
  // mock calls from down below.
  const promises = [
    fetchUserHistory(id),
    fetchUserProfile(id),
    // For testing only, let's throw.
    Promise.reject(new Error("an error")),
  ];

  const values = await Promise.allSettled(promises);
  // values === [
  //    { status: "fulfilled", value: [1, 2, 3] },
  //    { status: "fulfilled", value: {name:"dummy"} },
  //    { status: "rejected", reason: {}
  // ]
}

// The following functions are just mocks
// and should help improve readability
// of the example at the top.

async function fetchUserHistory(id) {
  return Promise.resolve([1, 2, 3]);
}

async function fetchUserProfile(id) {
  return Promise.resolve({ name: "dummy" });
}
