const http = require("http");

// this function create server and return it
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" ,

  }); //write some headers in res

  //how to send data that we send to client and end function mean that the data that we want to send is done now send response
  res.end('this is where i send the data'); // write a response to the client
});

const PORT=3000

//to start listening request
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
}) //127.0.0.1 === localhost
