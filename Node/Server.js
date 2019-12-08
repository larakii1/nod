//////Creer un serveur///////////
let http = require("http");
let server = http.createServer();
let ae ="yes";
let hello ="hello";
let ce = ae;


///////fs=FileSystem/////////////
let fs = require("fs")

//////////////////////////////
server.on("request", (request, Response) =>{
  
    fs.readFile("index.html",(err,data) =>{
        if(err) {
    Response.writeHead(404)
    
    Response.end(ce)
    console.log("nous sommes en erreur ...")
        } else{
           

            Response.writeHead(200, {
                "Content-type": "text/html; charset=utf-8"
                
            })
            Response.end(data)
            console.log("ça a l'air de marcher ┌(˘⌣˘)ʃ")
        }
       
      
    })
 
})
server.listen(8080)
//////////////////////////////////