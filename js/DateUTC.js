let getDateNow = () => {
  return `${getDay2(
    new Date().getDay()
  ).toString()}, ${new Date().getDate()} ${getMonth2(
    new Date().getMonth()
  )} of ${new Date().getFullYear()} and It is ${getHours()} : ${getMinutes()} : ${getSeconds()} ${getPMOrAM(getHours())}`;
};

let getPMOrAM = (hour) => {
  return hour > 12 ? "PM" : "AM";
};

let getDay2 = (numberDayWeek) => {
  let day = "";
  switch (numberDayWeek) {
    case 0:
      day = "Sunday";
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
};

let getHours = () => {
  return new Date().getHours();
};

let getMinutes = () => {
  return new Date().getMinutes();
};

let getSeconds = () => {
  return new Date().getSeconds();
};

let getDate = () => {
  document.write(`Today is ${getDateNow()}`);
};

let getMonth2 = (numberMonth) => {
  let month = "";
  switch (numberMonth) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
};
