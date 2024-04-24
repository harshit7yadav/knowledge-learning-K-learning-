const fs=require('fs');
const http=require('http');

const port=7000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url==='/' || req.url==='/home'){
        res.statusCode=200;
        const data=fs.readFileSync('./index.html');
        res.end(data.toString());
    }
    else if(req.url==='/login'){
        res.statusCode=200;
        const data=fs.readFileSync('./registration.html');
        res.end(data.toString());
    }
});

server.listen(port,()=>{
    console.log("Listening to the port "+port);
});