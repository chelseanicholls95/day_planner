const updateTimeBlock = () => {
  // get current hour
  const currentHour = moment().format("H");

  const checkTime = () => {
    const time = $(".row").attr("data-hour");

    console.log(time);
    // get data attribute of row
    // if time = current hour - remove past class and add present
    // if time > current hour - remove past class and add future
  };

  $(".row").each(checkTime);

  // check time for each block
};

const onLoad = () => {
  // get current day from moment, format and set text to element
  const currentDay = moment().format("Do MMMM YYYY");
  $("#currentDay").text(currentDay);

  // update time blocks to past, present or future
  $(updateTimeBlock);
};

$(document).ready(onLoad);
