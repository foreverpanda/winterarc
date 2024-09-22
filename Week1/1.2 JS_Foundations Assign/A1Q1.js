//Q1 Counter
let counter = 30;

console.log("========= Timer is going to start =========");
const timer = () => {
  console.log(counter);
  counter--;

  if (counter <= 0) {
    clearInterval(timerId);
    console.log("Timer Over");
  }
};
const timerId = setInterval(timer, 1 * 1000);
