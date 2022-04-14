let setCalendar = () => {
  getMenuMes();
  writeCalendar();
};

let getMonthInput = () => {
  return parseInt(prompt("Ingrese un mes del 1 al 12"));
};

let getMonth = (numberMes) => {
  switch (numberMes) {
    case 1:
      return "Enero";
    case 2:
      return "Febrero";
    case 3:
      return "Marzo";
    case 4:
      return "Abril";
    case 5:
      return "Mayo";
    case 6:
      return "Junio";
    case 7:
      return "Julio";
    case 8:
      return "Agosto";
    case 9:
      return "Septiembre";
    case 10:
      return "Octubre";
    case 11:
      return "Noviembre";
    case 12:
      return "Diciembre";
  }
};

let getYear = () => {
  return new Date().getFullYear();
};

let getMenuMes = () => {
  alert(
    `
    Menu de Ingreso de Meses
    ========================================
    Ingrese 1 - Para Enero
    Ingrese 2 - Para Febrero
    Ingrese 3 - Para Marzo
    Ingrese 4 - Para Abril
    Ingrese 5 - Para Mayo
    Ingrese 6 - Para Junio
    Ingrese 7 - Para Julio
    Ingrese 8 - Para Agosto
    Ingrese 9 - Para Septiembre
    Ingrese 10 - Para Octubre
    Ingrese 11 - Para Noviembre
    Ingrese 12 - Para Diciembre
    ========================================
    `
  );
};

let getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

let writeCalendar = () => {
  let year = getYear();
  let month = getMonthInput();
  let days = getDays(year, month);
  document.write(`
  <div style="text-align: center;">
    <h3>
      ${getMonth(month)} ${year}
    </h3>
  </div>
  `);
  writeDays(days, month, year);
};

let getDayName = (year, month, day) => {
  var date = new Date(year, month - 1, day, 0);
  return date.toLocaleDateString("es-ES", { weekday: "long" });
};

let writeDays = (dias, month, year) => {
  for (let i = 1; i <= parseInt(dias); i++) {
    document.write(`
    <head>
    <link rel="stylesheet" href="./css/index.css" type="text/css">
    </head>
    <body>
      <div id="ul_top_hypers">
        <ul id="ul_top_hypers">
          <li> <p><b>${i}</b></p> ${getDayName(
      year,
      month,
      i
    ).toLocaleUpperCase()} </li>
        </ul>
      </div>
    </body>
    `);
  }
};
