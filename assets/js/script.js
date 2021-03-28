const checkTimeAndUpdate = (row) => {
  // get current hour
  const hourString = moment().format("H");
  const currentHour = parseInt(hourString);

  // get data attribute of row
  const time = $(row).data("hour");
  const textAreaElement = $(row).find("textarea");

  // if time < current hour - add past
  if (time < currentHour) {
    textAreaElement.addClass("past");
  }

  // if time = current hour - add present
  if (time === currentHour) {
    textAreaElement.addClass("present");
  }

  // if time > current hour - add future
  if (time > currentHour) {
    textAreaElement.addClass("future");
  }
};

const updateTimeBlock = () => {
  // check time for each block and change to past, present for future
  $(".row").each((i, row) => {
    checkTimeAndUpdate(row);
  });

  // target save button and add event listener

  // retrieve data from local storage and set text content of text area
};

const onLoad = () => {
  // get current day from moment, format and set text to element
  const currentDay = moment().format("Do MMMM YYYY");
  $("#currentDay").text(currentDay);

  // update time blocks to past, present or future
  $(updateTimeBlock);
};

$(document).ready(onLoad);
