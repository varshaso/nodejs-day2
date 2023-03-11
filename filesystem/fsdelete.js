const fs = require("fs");

fs.unlink('./files/deleteme.txt',(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("file deleted successfully")
    }
})