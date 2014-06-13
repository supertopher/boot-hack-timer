var target_date  = new Date("June 20, 2014").getTime();
var days, hours, minutes, seconds;

setInterval(function(){
  var countdown = document.getElementById("countdown");
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;
  // Calculate
  days = parseInt(seconds_left / 86400);
  // Modulus of 86400 will remove the days we just too account for
  seconds_left = seconds_left % 86400;

  hours     = parseInt(seconds_left / 3600);
  seconds_left  = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  countdown.innerHTML = "Time until Final Presentations: " + days + " Days " +
  hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

}, 1000);
