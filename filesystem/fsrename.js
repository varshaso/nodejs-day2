const fs = require("fs");

fs.rename('./files/info.txt','./files/infonew.txt',(err,data)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
        console.log("file renamed successfully")
    }
})