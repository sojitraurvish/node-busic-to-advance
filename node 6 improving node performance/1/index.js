// how to imporove perofmance of our node app

// our server take request and process them in event loop(event loop which takes help of thread pull which has one main thread(to run our program) and three separate threads to handle reques) and send response to client back this happens in single thread because js is single threaded 
// that mean it can process one request at time 

//but here node js pretty good at passing those requests so our server do not block

//node and the event loop can juggle these multiple requests by taking advantages of mutliple threads that your oprating system already has and by taking advantage of thread pool. node makes use of them i/o tasks which takes too long time to complete so it try to pass these long running tasks to the thread pull and our operating system so our code or event loop does not block

// so assure that you have node server that handles an incomming request by reading and writing a file on you machine or an another server node pass that work to reading a file to thread pull so our code does not block your js code even though your js code is running on a single thread. for the wast mejority of system this setup works great

// but same time we have code that require lot of processing power and the code that blocks our event loop.code does not include our busic file and network opration that node does not know how to handle efficiently. 
// so what if we have to do lot of havey lifting with javascript which run on single thread. so now let optimize the performance of our node web server and specially machine with multipul core processor.