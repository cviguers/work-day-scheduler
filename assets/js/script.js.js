// selects element by class
var calendarContainer = document.querySelector(".calendar");
var hourContainer = document.querySelector(".hour");
var saveBtn = document.querySelector(".saveBtn");
var userInput = document.querySelector(".description");

// global variables
var currentTime = dayjs();

// wrap jquery in function to allow html/css to load first
$(function () {
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

    //Save data to local storage on click
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time,value);
  });

  //Retrieve data from local storage 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});