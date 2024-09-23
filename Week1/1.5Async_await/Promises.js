const fs = require("fs");

// console.log("Hello before fs");

// fs.readFile("testFile.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// for (let i = 0; i < 10000000000; i++);

// console.log("Hi after fs");


//The above code is ugly
// Promises are syntactical sugar that make this code slightly more readable


//ugly way of reading a file
// function kiratReadFile(cb){
//     fs.readFile("testFile.txt","utf-8", function(err,data) {
//         cb(data)
//     })
// }
// function onDone(data){
//     console.log(data);
// }

// kiratReadFile(onDone)


//cleaner way(promise)

function kiratReadFile2(){
    return new Promise(function(resolve){
        fs.readFile("testFile.txt","utf-8", function(err,data){
            console.log("Inside reading dunctiuon")
            resolve()
        })
    })
}

//new Promise is an object of Promise class, and whenver we are initialising a promise class the first argument is function

function onDone2(data){
    console.log(data)
}


let a = kiratReadFile2()

console.log(a)

a.then()