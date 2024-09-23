function kiratReadFile() {
  const readFile = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Inside Promise");
      resolve("Promise Resolved");
    }, 2000);
  });
  return readFile;
}

//Way 1 of calling Promise
// async function main(){
//     let value = await kiratReadFile(); 
//     console.log(value)
//     console.log("Both work Done");
// }
//code after this will not be executed until the kiratReadFile content isnt fetched thread is waiting it to get finished
//main mai control aa jayega aur phr jaise hi await aayega wo waha se process webAPI section mai chale jaayega uske baad baaki ka code to continue execute hote rahega bass await waala jo block hai uska code wait karega for the code to get finished and then event loop will hand it over to stack 

// main()

//await should only be inside an async function as a top level entity it cant work

//Way 2nd of calling Promise
function onDone(data) {
  console.log(data);
}

kiratReadFile().then(onDone);
console.log("Both work Done");
