var workClock;
var shortBreakClock;
var longBreakClock;
var alarm = document.getElementById('alarm');

function startWorkTimer() {
  if (!workClock) {
    workClock = createClock('work-timer', 20 * 60, function() {
      playAlarm();
    });
  }
  workClock.start();
}

function stopWorkTimer() {
  if (workClock) {
    workClock.stop();
    alarm.pause();
  }
}

function resetWorkTimer() {
  if (workClock) {
    workClock.stop();
    workClock.setTime(20 * 60);
    alarm.pause();
    //workClock.start();
  }
}


function startShortBreakTimer() {
  if (!shortBreakClock) {
    shortBreakClock = createClock('short-break-timer', 5 * 60, function() {
      playAlarm();
    });
  }
  shortBreakClock.start();
}

function stopShortBreakTimer() {
  if (shortBreakClock) {
    shortBreakClock.stop();
    alarm.pause();
  }
}

function resetShortBreakTimer() {
  if (shortBreakClock) {
    shortBreakClock.stop();
    shortBreakClock.setTime(5 * 60);
    alarm.pause();
    //shortBreakClock.start();
  }
}


function startLongBreakTimer() {
  if (!longBreakClock) {
    longBreakClock = createClock('long-break-timer', 15 * 60, function() {
      playAlarm();
    });
  }
  longBreakClock.start();
}

function stopLongBreakTimer() {
  if (longBreakClock) {
    longBreakClock.stop();
    alarm.pause();
  }
}

function resetLongBreakTimer() {
  if (longBreakClock) {
    longBreakClock.stop();
    longBreakClock.setTime(15 * 60);
    alarm.pause();
    //longBreakClock.start();
  }
}

function createClock(elementId, timeInSeconds, callback) {
  var clock = $('#' + elementId + ' .clock').FlipClock(timeInSeconds, {
    clockFace: 'MinuteCounter',
    autoStart: false,
    countdown: true,
    callbacks: {
      stop: callback
    }
  });
  return clock;
}

function playAlarm() {
  alarm.currentTime = 0;
  alarm.play();
}
