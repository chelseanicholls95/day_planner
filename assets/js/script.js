const saveTextInput = (event) => {
  const time = event.data.time;
  const textareaElement = event.data.textareaElement.val();
  localStorage.setItem(time, textareaElement);
};

const updateTimeBlock = (row) => {
  const currentHour = moment().hour();
  const time = $(row).data("hour");
  const textareaElement = $(row).find("textarea");

  if (time < currentHour) {
    textareaElement.addClass("past");
  } else if (time === currentHour) {
    textareaElement.addClass("present");
  } else {
    textareaElement.addClass("future");
  }

  const button = $(row).find("button");
  button.click({ textareaElement, time }, saveTextInput);

  // retrieve data from local storage & set text content of textarea
  const savedData = localStorage.getItem(time);
  textareaElement.text(savedData);
};

const renderCurrentTime = () => {
  const currentDay = moment().format("Do MMMM YYYY");
  $("#currentDay").text(currentDay);
};

const renderTimeBlocks = () => {
  $(".row").each((i, row) => {
    updateTimeBlock(row);
  });
};

const onLoad = () => {
  renderCurrentTime();

  renderTimeBlocks();
};

const clearTasks = () => {
  localStorage.clear();
  $("textarea").val("");
};

$(document).ready(onLoad);
$("#clearBtn").click(clearTasks);
