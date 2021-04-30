const saveTask = (event) => {
  const time = event.data.time;
  const textareaElement = event.data.textareaElement.val();
  localStorage.setItem(time, textareaElement);
};

const clearTasks = () => {
  localStorage.clear();
  $("textarea").val("");
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
  button.click({ textareaElement, time }, saveTask);

  const savedData = localStorage.getItem(time);
  textareaElement.text(savedData);
};

const renderTimeBlocks = () => {
  $(".row").each((i, row) => {
    updateTimeBlock(row);
  });
};

const renderCurrentTime = () => {
  const currentDay = moment().format("Do MMMM YYYY");
  $("#currentDay").text(currentDay);
};

const onLoad = () => {
  renderCurrentTime();

  renderTimeBlocks();
};

$("#clearBtn").click(clearTasks);

$(document).ready(onLoad);
