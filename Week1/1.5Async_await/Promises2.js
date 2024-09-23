var d = new Promise(function (resolve) {
  setTimeout(() => {
    resolve(); //return undefined because we have to tell what should resolve pass to the then(callback) function
    // resolve("hello");
  }, 1000);
});

function callbackify() {
  console.log(d);
}

console.log(d)

d.then(callbackify);
