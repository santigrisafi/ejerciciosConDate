let getUser = () => {
  let startTime = parseInt(performance.now());
  let user = saveUser();
  let endTime = parseInt(performance.now());
  alert(
    `The inputed user ${user.name} ${user.lastName} ${
      user.secondLastName
    } and the load time it was ${endTime - startTime} ms`
  );
};
