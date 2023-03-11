const fs = require ('fs');

const string1="Hello world form node from fs";

fs.appendFile('./files/info.txt',string1,(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("data appended successfully")
    }
})