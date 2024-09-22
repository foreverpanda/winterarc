function getTime() {
  const now = new Date(); // Create a new Date object representing the current date and time

  // Get individual components of the time
  let hours = now.getHours(); // Get the hour (0-23)
  let minutes = now.getMinutes(); // Get the minutes (0-59)
  let seconds = now.getSeconds(); // Get the seconds (0-59)
  let ms = now.getMilliseconds();

  return {
    hr: hours,
    min: minutes,
    s: seconds,
    ms: ms,
  };
}

console.log("Timeout timer is of 1 Second");

let beforeTimer = getTime();
console.log("Before starting Timer, Time : ", beforeTimer);
let afterTimer;
setTimeout(() => {
  afterTimer = getTime();
  console.log("Now the inner Function started, Time : ", afterTimer);
}, 1 * 1000);

function calculate(timer1, timer2) {
  if (timer1 > timer2) {
    return timer1 - timer2;
  } else {
    return timer2 - timer1;
  }
}

setTimeout(() => {
  let hr = calculate(beforeTimer.hr, afterTimer.hr);

  let min = calculate(beforeTimer.min, afterTimer.min);

  let sec = calculate(beforeTimer.s, afterTimer.s);

  let ms = calculate(beforeTimer.ms, afterTimer.ms);

  console.log(`Time Taken ${hr}:${min}:${sec}:${ms}`);
}, 3 * 1000);
