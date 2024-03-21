const datetimeAutoCorrection = (input, format, ms = false) => {
  if (input.length === 0 || format.length === 0) { 
    return;
  }

  const emptyVal = 777;
  const formattedInputDate = input
    .replace(/\//g, ".")
    .replace(/[юЮ]/g, ".")
    .replace(/[жЖ]/g, ":")
    .replace(/(?<=\.|^|\s|:)(?!\d)/g, emptyVal.toString());

  const formatOrder = format.split(/[\W_]+/);
  const components = formattedInputDate.split(/[\W_]+/);

  const order = {};

  formatOrder.forEach((component, index) => {
    order[component] = index;
  });

  const componentsOrder = Object.keys(order).sort((a, b) => order[a] - order[b]);

  const orderedComponents = componentsOrder.map((component) => components[order[component]]);

  const dateMap = {};

  componentsOrder.forEach((component, index) => {
    dateMap[component] = parseInt(orderedComponents[index]);
  });

  const currentDate = new Date();
  let year = dateMap.yyyy === emptyVal || isNaN(dateMap.yyyy) ? currentDate.getUTCFullYear() : dateMap.yyyy;
  let month = dateMap.MM === emptyVal || isNaN(dateMap.MM) ? currentDate.getUTCMonth() + 1 : dateMap.MM;
  let day = dateMap.dd === emptyVal || isNaN(dateMap.dd) ? currentDate.getUTCDate() + 1 : dateMap.dd;
  let hours = dateMap.HH === emptyVal || isNaN(dateMap.HH) ? currentDate.getUTCHours() : dateMap.HH;
  let minutes = dateMap.mm === emptyVal || isNaN(dateMap.mm) ? currentDate.getUTCMinutes() : dateMap.mm;
  let seconds = dateMap.ss === emptyVal || isNaN(dateMap.ss) ? currentDate.getUTCSeconds() : dateMap.ss;

  let dateResult = Date.UTC(year, month - 1, day, hours, minutes, seconds);
  if (ms) {
    dateResult = dateResult / 1000;
  }
  
  return dateResult;
}
