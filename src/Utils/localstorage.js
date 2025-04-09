export const getUsers = function (key) {
  const users = localStorage.getItem(key);

  //   console.log(users);

  return JSON.parse(users);
};

export const setUsers = function (key, item) {
  const stringItem = JSON.stringify(item);
  localStorage.setItem(key, stringItem);
};

export const formmat = () => {
  return 1;
};
