const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"))?.user;
};

export default getCurrentUser;
