const fs = require('fs')
const allocatedBuffer = Buffer.alloc(1024)

fs.open('./files/info.txt','r+',(err,fileDescriptor)=>{
    if (err){
        console.log(err)
    }else {
        console.log(fileDescriptor,"file opened successfully")

        fs.read(fileDescriptor,allocatedBuffer,0,allocatedBuffer.length,0,(rerr,
            bytes)=> {
                if (rerr){
                    console.log(rerr)
                } else {
                    console.log(bytes+ "bytes read");
                    if (bytes>0){
                        console.log(allocatedBuffer.slice(0, bytes).toString());
                    }
                }
            }
            )
    }
})