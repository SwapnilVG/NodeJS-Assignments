let fs = require('fs')
let filename = 'nodejs_architecture.txt'


//Asynchronous
fs.unlink(filename,(err)=>{
    if(err){
        console.log("Error in Deleting File",err)
    }else{
        console.log("File Deleted SuccessFully")
    }
})



// Synchronous
try {
    fs.unlinkSync(filename)
    console.log("File Deleted SuccessFully")
} catch (error) {
    console.log("Error in Deleting File",error)   
}