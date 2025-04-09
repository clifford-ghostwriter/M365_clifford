export const getUsers = function (key) {
  const users = localStorage.getItem(key);

  //   console.log(users);

  return users;
};
