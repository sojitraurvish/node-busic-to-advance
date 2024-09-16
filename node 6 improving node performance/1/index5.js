// so first approach to improve performance is using built in node cluster module which allow you to create copes of your node process that each run your server code side by side in parallel

// when you write node server.js and start node process it create main node process node calles it master process  

//see photo 2

//inside the cluster we have access to this function fork() and any time we run this function node takes this master process and create copy of it that it calls as worker process. we can call this fork() how many times we like to create many worker process that attach to single master process. now it's that worker process that do all the work from taking http requst,process,and sending response to client. and each worker contain the require the code to send response back. While the master process is only responsible for coordination the creation of these worker processes using the fork() function.

// if you run fork() function twice it will create node processes. master which we created ourselves when we run node server.js and two worker processes which we created using fork() function 

// it will be these worker porcesses that accepts incomming requests using what called the round robin approach. send first request to first worker and second to second and we have only two workers so third request again goes back to first worker but it also depends on that which approach your os is using it serve requests between worker porcesses useing algo that your os supports

// now let's create cluster with this fork() function in clyster module

const cluster=require("cluster")
//the only way by which we can differentiate between master and worker process isMaster boolean flag

app.get("/",(req,res)=>{
    res.send("performance improvement "+process.pid)
    // we can use build in process module has this process.pid porperty to know which or (current) worker process is running 
})

function delay(ms){
    const start=Date.now();
    while(Date.now()-start<ms){}
}

app.get("/timer",(req,res)=>{
    delay(9000);
    res.send("Ding ding ding")
})

console.log("running server.js"); // this will run three times

//above app.listen call
if(cluster.isMaster){
    console.log("master process is running");
    cluster.fork()
    cluster.fork()
}else{
    console.log("worker process is running");
    //as only worker we want to listen to requests so i will put app.listen here in this block from below outside of the block
    app.listen(3000)// both worker are listening to this port 3000 and node http server knows that how to devides the incomming requests 
    
}

// Note- if you have setTimeout funtion on one chrome tab and if you change that tab then setTimeout function will execute on every singe minute for that previous tab even though you set time 10 seconds.

// Note - chrome and other browser are clever if they notice you are making  two identical request for e.x to the /timer endpoint in two tabs in your browser then chrome determines that you are making two same requests at same time so it will wait for first request to complete before even try to make second request. and potentially it will reuse the response if the response is saved to your browser cache. this concept can create confusion if you don't understand it. so here chrome try to minimize the traffic on your network. it is not good while testing your server performance with cluster like this. and while testing these performance in network tab we need to disable cache.So that chrome makes are request side by side at the same time. or we can use the key combination to ctrl+shift+R to refresh the page without cache.

// Note : above we show the huge performance improvement.
//but our clusters has it's own limitation. 
// what if we open four tab in our and if we have 2 cluster mean 2 worker process so our first 2 request will do together and second 2 request will have to wait until first 2 request is done. it 1 get finish from first two 3 or 4 get change to start executing. and we can see that our third request reuse the response of first process and 4 request reused the second process (we can see it by process.pid mean process id) using round robin algo but still with cluster we have to wait and we can create limited worker processes.

// now let's automate this task to create worker process according to CPU limit

const os=require("os"); // which is another node built in module

// and we are going to use os moudule which will give us create current number of worker processes to run efficiently each processes need to use seperate processor in your computer or cpu. in general we want to limit the amount of forks that we create to the amount of logic or physical cores in your cpu. 
//physical cores are just that is separete processors in your computer they each handles works parallel. 

// logical core are little bit complicate. they use some fancy logic to let you run multiple threads parallel on one physical core. but only in certain cases and not as efficiently as physical cores. to maximize the performace of our server in general we want to take the amount of logical cores which we can do by saying


if(cluster.isMaster){
    const NUM_WORKERS=os.cpus().length;// which will give us number of logical cores
    // now we are only creating the amount of worker processes that maximizes the uses of all of the cores in our server machine
    // and in my machine i have 4 physical cores but 8 logical cores. so i can create 8 worker processes. and that mean in my browser i can make 8 requests at the same time and get performance increase.

    // so 4 phisical cores take our 9s with our /timer api and non-physical cores so the four left over might see the performance somewhere between.

    // i make 6 request at time
    // but it may happen my machine has 8 physical cores so each request have taken almost 9 seconds other wise i thought 4 request will be executed with physical cores and 2 with logical cores so at there we may see some delay.
    for(let i=0;i<NUM_WORKERS;i++){
        cluster.fork()
    }

}else{
    console.log("worker process is running");
    //as only worker we want to listen to requests so i will put app.listen here in this block from below outside of the block
    app.listen(3000)// both worker are listening to this port 3000 and node http server knows that how to devides the incomming requests 
    
}
