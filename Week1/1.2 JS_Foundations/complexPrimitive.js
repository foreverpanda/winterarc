// //Q1
// let arr = [2, 3, 4, 5, 567, 434, 523, 342, 234, 424, 24, 34, 56];

// console.log("Printing even from given array\n");

// for (let i = 0; i < arr.length; i++) {
//   if (!(arr[i] % 2)) {
//     console.log(arr[i]);
//   }
// }

// //Q2

// let arr2 = [1, 2, 3, 4, 5, 100, 3, 2, 55];
// let greatestNumber = Number.MIN_VALUE;
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] > greatestNumber) {
//     greatestNumber = arr2[i];
//   } else {
//     continue;
//   }
// }
// console.log("Greatest Element from the array 2 is : ", greatestNumber);

// //Q3

// let obj = [
//   { fName: "Ramesh", gender: "Male" },
//   { fName: "Rajesh", gender: "Male" },
//   { fName: "Rajnesh", gender: "Male" },
//   { fName: "Rakesh", gender: "Male" },
//   { fName: "Rashmi", gender: "fMale" },
//   { fName: "Mahesh", gender: "Male" },
//   { fName: "Laxmi", gender: "fMale" },
//   { fName: "Hitesh", gender: "Male" },
// ];

// for(i=0;i<obj.length;i++){
//     // if(obj[i].gender === "Male"){
//     if(obj[i]["gender"] === "Male"){
//         console.log(obj[i].fName)
//     }
// }


// //Q3

// let arr3 = [1,2,3,4,5,6,7,8,9,10]


let sum = 1;
for(let i = 1 ; i<100000000000; i++)
{
    console.log(sum)
    sum = sum+i;
}

