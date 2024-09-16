// lucid app,giphy, microsoft visio for achitecture diagram

//client package.json

//server package.json
//'start':"PORT=5000 node index.js" how to set env cars 

//both package.json

//Note - path.join is needed when you want to create absolute path for all the os
// ------------------------------------------

// const express = require("express");
// const app = express();
// const PORT = 5000;
// app.listen(PORT, () => {
    
// })

//2 create server using node http defult module

// const http = require("http");

// const server = http.createServer(/*this takes req listener function which response to all incomming req*/)

// const PORT = 5000
// server.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`)
// })

//3 create server using node http defult module

//server.js
const http = require("http");

const express = require("express");
const app = express(); //any route thai i attach to this app object which respond to the request that is comming for our server
//and here instead of above two line you can import
// const app=require("./app")
const server = http.createServer(app)

const PORT = 5000
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

// but now we can seperate our code with server functionly and express code to app.js file
const express = require("express");
// const app = express();// here we write our all express code
module.exports = app

// when we have webscokets so we can to start our server this way using built in http module
// now build in http module not only respond to http request but also respond to other types of connections like websocket request


// instaill cors

//why cors see photo 1

app.use(cors())// by defult it will allow all origin
app.use(cors(
    origin:"http://localhost:3000" // here we specify our frontend origin
))// by defult it will allow all origin

// how to make whitelist with cors see photo 2

//----------------------------------------------------------------
// there may be cade no which you do not have control at when it will be executed so use promise and create wrapper function it will help you control that code and return the promise from there you can it where you have to load the data form file before you app starts
//see photo 3 

//Note: if you are working with stream then we have stream promises apis


//right now we have to start our both the servers frontend and backend

//so i create root package.json to manage but remember this package.json does not have any package

// "server":"cd server && npm run watch"
// "client":"cd client && npm start"
// other way to do same thing
// "server":"npm run watch --prefix server"
// "client":"npm start --prefix client"

// to start both together
// "watch":"npm run server && npm run client" here there si problem that first it run first command and until it does start it will not run second commad
// "watch":"npm run server & npm run client" here it will run in parallel first it run first command in background and then it will run second command so that how it runs both command together

// now you can make same script to install packages "install-server","install-client","install":"&&" here use && because it is not require to start both together
// "test":"npm run test --prefix client && npm run test --prefix server"

// Note here we do not need to use package called concurrently to start both server together

//-----------------------------------------------
// how to serve our client and server from same server
// after building your build we get index.html

// so in frontend package.json file write command
// "build":"BUILD_PATH=../server/public react-scripts build"
// now this BUILD_PATH env variable generate build inside server/public folder and form where we can provide public access to our index.html file and that how our application will have single srever for fromtend as well as backend
// but do not forget to write this app.use(express.static(path.join(__dirname,"..","public")) in server.js

// but right now for / endpoint user have to write /index.html
// so let's fix that
// app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"..","public","index.html"))}) so now we do not need to write /index.html

// add one more script
// "deploy":"npm run build --prefix client && npm start --prefix server",
//video no 15 for this script

 // app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"..","public","index.html"))})
// so here there is one proble that when we access any other file then index.html it will first goes to our static middleware which is express.static but it will return 404 not found then it goes to our endpoints app.use() and at list we have this function which serves index.html file
//app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"..","public","index.html"))})
// but it only respond to / so to make it responds for all file routes add * after /* now it will handle request all the pagees that are exists 
//app.get("/*",(req,res)=>{res.sendFile(path.join(__dirname,"..","public","index.html"))})

// to create architecture diagram see lecture 28 in 9 module




