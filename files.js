const[ , ,number1,number2,usernameArg,configPath] = process.argv
 


const sum=(num1,num2)=> num1+num2;
console.log(sum(+number1,+number2));

const greet =(username)=>{
    console.log(`hi ${username} ,Welcome to the backEnd`)
}

greet(usernameArg)

fs.readFile(configPath,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log("File read")
    }
})
const newContent = "You just created me as a file";

fs.writeFile("./createdfile.txt",newContent,(err)=>{
    if(err){
            console.log(err)
    }
    else{
        console.log("File succesfully created")
    }
})
const addedContent = "\n I'm appended secondly"

fs.appendFile("./createdfile.txt",addedContent,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Content appended Successfully")
    }
})

let CurrentTime = Date.now();
console.log(CurrentTime)
let todayDate = new Date();
console.log(todayDate)
console.log(todayDate.toUTCString())



const os = require("os")

console.log("Os version-------", os.version());
console.log("Free Memory-------", os.freemem());
console.log("Total Memory------", os.totalmem());
console.log("CPU-------", os.cpus());
