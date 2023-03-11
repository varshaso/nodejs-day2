const fs = require ('fs');

const string1="Hello world form node from fs";

fs.writeFile('./files/info3.txt',string1,(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("success")
    }
})