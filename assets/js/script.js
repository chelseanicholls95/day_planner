$(".saveBtn").on("click", function () {
  // when button is clicked, get value of text input, get the data attribute value and save in local storage
  const textInput = $(this).prev().val();
  const timeDiv = $(this).parent();
  const time = $(timeDiv).data("hour");
  localStorage.setItem(time, textInput);
});

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
