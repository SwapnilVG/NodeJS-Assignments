const fs = require('fs')

const nodejs_information = 'NodeJS is a programming language that utilize both JavaScript and C/C++ to create its core component nodeJS is a platform that utilizes JavaScript and its primary employed for developing web application that are highly focused on input/output operation including but not limited to chat application and multimedia streaming website. the platform is constructed using Google Chrome V8 JavaScript engine. A web application type of software that execute on a server and is displayed by client browser that obtains all the application resources over the Internet'

const filename = 'nodejs_architecture.txt'

//Asynchronous
fs.writeFile(filename,nodejs_information,(err)=>{
    if(err){
        console.log("Error in writing to the file",err)
    }else{
        console.log("File Successfully Created")
    }
})


//Synchronous
try {
    fs.writeFileSync(filename,nodejs_information)
    console.log("File Successfully Created")
} catch (error) {
    console.log("Error in writing to the file",err)
}