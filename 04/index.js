const fs = require('fs')

const nodejs_advantages = '\nCompared to other server-side languages, Nodejs has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of webapplications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier'

const filename = 'nodejs_architecture.txt'

//Asynchronous
fs.appendFile(filename,nodejs_advantages,(err)=>{
    if(err){
        console.log("\nError in Appending File\n",err)
    }else{
        console.log("\nFile Successfully Append\n")
        fs.readFile('nodejs_architecture.txt',(err,data)=>{
            if(err){
                console.log("\nError in Reading File\n")
            }else{
                console.log(data.toString())
                console.log("\nFile Successfully Read\n")
            }
        })
    }
})



// Synchronous
try {
    fs.appendFileSync(filename,nodejs_advantages)
    console.log("\nFile Successfully Append\n")
    let data = fs.readFileSync(filename)
    console.log(data.toString())
} catch (error) {
    console.log("\nError in Appending File\n",error)
}