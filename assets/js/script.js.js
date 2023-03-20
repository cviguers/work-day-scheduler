// wrap jquery in function to allow html/css to load first
$(function () {
  // selects element by class
  var calendarContainer = document.querySelector(".calendar");
  var hourContainer = document.querySelector(".hour");
  var saveBtn = document.querySelector(".saveBtn");
  var userInput = document.querySelector(".description");

  // global variables
  var currentTime = dayjs();

  // saves values input into the description class dependent on each hour id on click
  $(".saveBtn").on("click", function () {
    var hour = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, hour);
  });

    // gets any existing value from local storage on page load
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));



  // targets class time-block to determine css
  $(".time-block").each(function() {
    // splits each hour by splitting the number from the id to compare
    var hourToCheck = parseInt($(this).attr("id").split("-")[1]);
    // apply past class if calendar hour is earlier than the current hour
    if (hourToCheck < currentTime.hour()) {
      $(this).addClass("past");
    } 
    // apply present class if calendar hour is the current hour
    else if (hourToCheck === currentTime.hour()) {
      $(this).addClass("present");
    }
    // apply future class if calendar hour is later than the current hour
    else if (hourToCheck > currentTime.hour()) {
      $(this).addClass("future");
    }
  });

  // uses DayJS to display current date
  $('#currentDay').text(currentTime.format('MMM DD, YYYY'));

});