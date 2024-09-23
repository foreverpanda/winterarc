//reading a file

const fs = require("fs")


console.log("Hello before fs")

fs.readFile("testFile.txt","utf-8", function (err,data) {
    console.log(data)
})


//suppose for loop take more time than fs to execute
for(let i = 0; i<10000000000; i++);


console.log("Hi after fs")

//pahele saare synchronous calls complete krta hai phr uske baad jo async calls the uske results btata hai