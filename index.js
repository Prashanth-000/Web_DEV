const http=require('http')
const fs=require('fs')
const url=require('url')

http.createServer((req,res)=>{
    const name=url.parse(req.url,true);
    let fileName=name.pathname;
    if(fileName.startsWith("/")){
        fileName=fileName.substring(1);
        console.log(fileName);
    }
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead(404,{"content-type":"text/html"});
            return res.end("404 not file found");
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        return res.end();
    });

}).listen(3000,()=>console.log("Server running in port 3000"));