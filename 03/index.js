const fs = require('fs')


//Asynchronous
fs.readFile('nodejs_architecture.txt',(err,data)=>{
    if(err){
        console.log("Error in Reading file",err)
    }else{
        console.log(data.toString())
        console.log("\n File Successfully Read")
    }
})



//Synchronous
try {
    const data = fs.readFileSync('nodejs_architecture.txt')
    console.log(data.toString())
    console.log("\n File Successfully Read")
} catch (error) {
    console.log("Error in Reading file",error)
}