res.send("send response to client")
res.send("<h1>html data</h1>")
res.send({name:"urvish"})

req.params.friendId

//how much time our request taken

app.use((req,res,next)=>{
    const start=Date.now();
    next();// here the req is forworaded to next middleware and when it's work get completed then it agein comes here to finish work and then return to client
    const end=Date.now()-start;
    console.log(`${req.url} ${req.method} ${end}ms`)
})

// with express we can parse req data (for json formate) that we did with pipe and all but here express gives method to do that for us but we have to write app.use(express.json()) for that so that we get json data directly and write this where meddleware starts in your file

req.ip
                //ipv4        ipv6
//localhost === 127.0.0.1 === ::1

//path module help us to create path for all the os
//__dirname === current directory
res.sendFile(path.join(__dirname,'..',"public","index.html"))

 // to server small static wesite we use express.static

 app.use('/mysite',express.static("public"))

//  Absolute Path: Full path from the root directory (e.g., /home/user/doc.txt).
// Relative Path: Path relative to the current working directory (e.g., ../docs/doc.txt).

 // this pubilc file page is reletive path so it start form where you start your app if you start it from some else directory it wont work

 // so we have to do path.join(__dirname,'public') and it is absolute path
// --------------------------------------------------
 //to set view engine
 app.set("view engine","ejs")
 app.set("views",path.join(__dirname,"myviews")) // where myviews is folder name
// myview/new.ejs {{data that passed from express}}

// app.get('/'()=>{ res.render('new',{variableOnPage:"urvish"})})

// ------------------------------------------------