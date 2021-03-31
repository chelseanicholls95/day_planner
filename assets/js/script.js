const saveTextInput = (event) => {
  // get time and text input value for the button clicked & save to local storage
  const time = event.data.time;
  const textInput = event.data.textInput.val();
  localStorage.setItem(time, textInput);
};

const updateTimeBlock = (row) => {
  // get current hour
  const hourString = moment().format("H");
  const currentHour = parseInt(hourString);

  // get textarea
  const textareaElement = $(row).find("textarea");

  // get data attribute of row
  const time = $(row).data("hour");

  // add the correct class
  if (time < currentHour) {
    textareaElement.addClass("past");
  } else if (time === currentHour) {
    textareaElement.addClass("present");
  } else {
    textareaElement.addClass("future");
  }

  // get button and add click event listener
  const button = $(row).find("button");
  button.click({ textInput: textareaElement, time: time }, saveTextInput);

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

const clearTasks = () => {
  localStorage.clear();
  $("textarea").val("");
};

$(document).ready(onLoad);
$("#clearBtn").click(clearTasks);
