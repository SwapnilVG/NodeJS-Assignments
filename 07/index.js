const http = require('http');

const server = http.createServer((request,respond)=>{
    if(request.url ==='/'){
        respond.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
    }
    respond.end();
});

server.listen(5000);
console.log("The HTTP Server is running on port 5000");