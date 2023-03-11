const fs = require("fs");

fs.readFile('./json/users.json',(err,data)=>{
    if (err) {
        console.log(err)
    } else{
        const users = JSON.parse(data);
        users[1].designation="teacher"

        fs.writeFile('./json/users.json',JSON.stringify(users),(writeerror)=>{
            if (writeerror){
                console.log(writeerror)
            }else{
                console.log("successful")
            }
        }
        )
    }
}
)