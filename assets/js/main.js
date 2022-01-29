// Set the date we're counting down to
var countDownDate = new Date("Jan 29, 2022 17:22:0").getTime();

var dayBox = document.querySelector('#day-box');
var hrBox = document.querySelector('#hr-box');
var minBox = document.querySelector('#min-box');
var secBox = document.querySelector('#sec-box');

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  dayBox.innerText = days
  hrBox.innerText = hours
  minBox.innerText = minutes
    secBox.innerText = seconds

  // If the count down is finished, write some text
    if (distance < 0) {
    var audio = new Audio("/assets/music/happy_new_year.mp3");
    audio.play();
    clearInterval(x);

    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>HAPPY NEW YEAR</h1>`;
  }
}, 1000);


