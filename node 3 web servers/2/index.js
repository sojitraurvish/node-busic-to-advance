const http = require("http");

// this function create server and return it
const server = http.createServer((req, res) => { //why here req is readable stream and res is writable stream which mean we pipe data from readable stream to writable stream and data will flow to req to back to the client as response

    const items=req.url.split("/"); //how to access query params
    //check item oject url is /friends/3234 

if(req.url=="/" && req.method=="POST"){

    // req object is readable stream so we can use res.on listening for data event
    // which will pass our data to call back function
    req.on("data",(data)=>{//here data is a buffer which is collection of bytes
        //req ma body ma json.stringify karva data convert karva
        console.log(JSON.parse(data.toString()))//aya parse and i think that way we have to add body parser
        //and res.json() karvanu taya 
    })
    req.pipe(res)
    
}
if(req.url=="/friends"){
    res.writeHead(200, { "Content-Type": "application/json" ,
  
    }); //write some headers in res
  
    // above functionality of header and status code we can do with these functions as well
    res.statusCode=200
    res.setHeader("Content-Type","application/json")
    //how to send data that we send to client and end function mean that the data that we want to send is done now send response
    res.end(JSON.stringify({ message: "Hello World" })); // write a response to the client
}else if (req.url==="/message"){

    res.setHeader("Content-Type","text/html")
    res.write("<html>")
    res.write("<h1>message</h1>")
    res.write("</html>")
    res.end()
}else{
    res.statusCode=404
    res.end()
}
}); //our http server that we are creating is an event emitter

// http.createServer is short hand for server.on("request",()=>{callback})

const PORT=3000

//to start listening request
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
}) //127.0.0.1 === localhost
