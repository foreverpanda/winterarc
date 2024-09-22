//Q3 Terminal Clock

const getTime =()=>{


    const date = new Date();

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();


    console.log(`Time : ${hour}:${min}:${sec}`);

}

setInterval(() => {
console.clear();
getTime(); 
}, 1*1000);