const fs = require("fs");

console.log("hellp process1");

// fs.readFile("./files/infor.txt", "utf-8",(err,data)=> {
//     if (error) {
//         console.log ("File not found - process3");
//     } else {
//         console.log(data);
//     }

// })

//sync mechanism
console.log ("hello process11")
try {
    const data = fs.readFileSync("./files/info.txt","utf-8");
    console.log(data)
} catch (error){
    console.log(error);
}

console.log("Hello process 2")