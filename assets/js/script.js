const updateTimeBlock = (row) => {
  // get current hour
  const hourString = moment().format("H");
  const currentHour = parseInt(hourString);

  // get data attribute of row
  const time = $(row).data("hour");
  const textAreaElement = $(row).find("textarea");

  // if time < current hour - add past class
  if (time < currentHour) {
    textAreaElement.addClass("past");
  }

  // if time = current hour - add present class
  if (time === currentHour) {
    textAreaElement.addClass("present");
  }

  // if time > current hour - add future class
  if (time > currentHour) {
    textAreaElement.addClass("future");
  }

  // target button and add event listener

  // retrieve data from local storage & set text content of textarea
};

const onLoad = () => {
  // get current day from moment, format and set text to element
  const currentDay = moment().format("Do MMMM YYYY");
  $("#currentDay").text(currentDay);

  // update time blocks
  $(".row").each((i, row) => {
    updateTimeBlock(row);
  });
};

$(document).ready(onLoad);
