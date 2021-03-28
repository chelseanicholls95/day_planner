const updateTimeBlock = (row) => {
  const saveTextInput = () => {
    // get value of textarea and set to local storage
    const data = $(textareaElement).val();
    localStorage.setItem(time, data);
  };

  // get current hour
  const hourString = moment().format("H");
  const currentHour = parseInt(hourString);

  // get textarea
  const textareaElement = $(row).find("textarea");

  // get data attribute of row
  const time = $(row).data("hour");

  // add the correct
  if (time < currentHour) {
    textareaElement.addClass("past");
  } else if (time === currentHour) {
    textareaElement.addClass("present");
  } else {
    textareaElement.addClass("future");
  }

  // target button and add event listener
  const saveBtn = $(row).find("button");
  saveBtn.click(saveTextInput);

  // retrieve data from local storage & set text content of textarea
  const savedData = localStorage.getItem(time);
  textareaElement.text(savedData);
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
