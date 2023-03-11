const fs = require ('fs');


fs.stat('./files/info.txt',(err,stats)=>{
    if (err){
        console.log(err);
    } else {
        console.log(stats);
        console.log("is it a file",stats.isFile());
    }
})