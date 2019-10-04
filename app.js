// element.addEventListener(event, function, useCapture);
// setInterval(function, milliseconds, param1, param2, ...)
// setTimeout(function, milliseconds, param1, param2, ...)
// document.getElementById("clickMe").onclick = doFunction;

var stopwatch = document.getElementById("stopwatch");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var secondsToHms = function(millisec) {
  millisec = Number(millisec);
  var h = Math.floor(millisec / 3600);
  var m = Math.floor(millisec % 3600 / 60);
  var s = Math.floor(millisec % 3600 % 60);

  function displayTime(unit) {
    return unit < 10 ? "0" + unit : unit
  };

  return displayTime(h) + ":" + displayTime(m) + ":" + displayTime(s);
}

var inputTime = 0;
var running; 

var startTimer = function() {
  running = true;
  hideButton();

  return (tInterval = setInterval(function() {
    inputTime++;
    stopwatch.innerHTML = secondsToHms(inputTime);
  }, 1000)); 
};

var pauseTimer = function() {
  running = false;
  start.innerHTML = "Resume";
  hideButton();
  return clearInterval(tInterval);
}

var hideButton = function() {
  if (running === true) {
    start.style.display = "none";
    pause.style.display = "inline";
  } else {
    start.style.display = "inline";
    pause.style.display = "none";
  }
}

var resetTimer = function() {
  running = false;
  hideButton();
  inputTime = 0;
  stopwatch.innerHTML = secondsToHms(inputTime)
  start.innerHTML = "Start"
  return clearInterval(tInterval);
}

start.onclick = startTimer;
pause.onclick = pauseTimer;
reset.onclick = resetTimer;