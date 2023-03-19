// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // selects element by class
  var calendarContainer = document.querySelector(".calendar");
  var hourContainer = document.querySelector(".hour");

  // selects element by id

  // creates js elements

  // appends elements to DOM
  
  // global variables
  var currentTime = dayjs();

  // adding each id to local storage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


  // compares current hour to id to determine class
  $(".hour").each(function() {
    var hourToCheck = +$(this).parent().attr("id").split("-")[1];
    console.log(hourToCheck);
    console.log(currentTime.hour());
    
    if (hourToCheck < currentTime.hour()) {
      $(this).addClass("past");
    } 
    else if (hourToCheck === currentTime.hour()) {
      $(this).addClass("present");
    }
    else if (hourToCheck > currentTime.hour()) {
      $(this).addClass("future");
    }
  });



  // uses DayJS to display current date
  $('#currentDay').text(currentTime.format('MMM DD, YYYY'));

});