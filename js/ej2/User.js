class User {
  name = "";
  lastName = "";
  secondLastName = "";
}

let saveUser = () => {
  let user = new User();
  user.name = prompt("Input your name");
  user.lastName = prompt("Input your lastName");
  user.secondLastName = prompt("Input your second lastName");
  return user;
};
