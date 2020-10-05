var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var milliSecToDec = new Date("dec 1,2020 00:01:00").getTime();

setInterval(function() {
  var nowInMilliSec = new Date().getTime();
  var diffInMilliSec = milliSecToDec - nowInMilliSec;

  var daysToDec = Math.floor(diffInMilliSec/(1000*60*60*24));
  var hoursToDec = Math.floor((diffInMilliSec%(1000*60*60*24))/(1000*60*60));
  var minutesToDec = Math.floor((diffInMilliSec%(1000*60*60))/(1000*60));
  var secondsToDec = Math.floor((diffInMilliSec%(1000*60))/1000);

  days.innerHTML = daysToDec;
  hours.innerHTML = hoursToDec;
  minutes.innerHTML = minutesToDec;
  seconds.innerHTML = secondsToDec;
}, 1000);

