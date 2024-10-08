// npm i pm2
// i suggest that save pm2 in your dependency in package.json

// it's not a development dependency because in production we will be running our server with pm2

// to start server with pm2
// pm2 start index.js 
// here it start our server and pm2 runs in background so i can write other commands on console but right now it just running our one instance 

// to know current status of our server
// pm2 status or pm2 list
// and right now we get only master process but we also learn how to manages worker processes by pm2

// to stop our server
// pm2 stop [id=0] or [name=server] -> get form pm2 list

// we can again start the server by calling it by it's name
// pm2 start [name=server] 


// if we want to terminate and remove it form the list of processes manages by pm2
// pm2 delete [name=server]

// but why we want to use pm2 ? because pm2 come with clustering built in which mean we can simplify our code to remove any use of cluster module we don't need fork inside javascript instead pm2 fork our process our code in server.js here will be run as worker process so we do not need to check cluster.isMaster flag so we get rid of entire block of code that provided by cluser module now we just need to run our server normally as we used to do app.listen(5000) and we can also remove the os module 

// now to start a cluster in pm2 run command / -i flag 
// pm2 start server.js -i 2
// -i for instances it measures the amount worker processes that will be created in our  cluster so after [-1] we can sepecify the  number of process that we want to start so specific number to create that many processes or max to create as many processes that our server is capable of according to cpu core(physical core and logical core). 

// pm2 start server.js -i max
// with this command it creates 8 process get stated

 
// if pm2 is managing my all the process then where my logs goes why i am not seeing any logs in the terminal 
// so we can type 
//pm2 logs -> and we can see real time view of what being log in our server right now and infect we can see the output is saved even when if we stop our server   

// press ctrl+c to exit from logs

// to restart cluster by writing
// pm2 restart -> after this command when you do pm2 list then in restart colum you can see our each process is restarted once 

//now if id do 
// pm2 logs -> again now exit out of this and write

// to see last 200 lines of logs
// pm2 logs --lines 200

// and you can finds the logs of that when we restart the master even though our code does not include any code for the master or for logs (pm2 does logs). this log for master is there because we did pm2 start so after removing the cluster code pm2 still uses cluster module that why we are seeing these logs

// pm2 includes lot of logging functionalities including sending logs to a file and even doing log rotation so that server does not get overwhelmed by one giant log file like we discuss earlier in the course

//10 lecture over =======================================================

// now let see the functionality of managing live clusters

// in development we do not use pm2 much but pm2 really sine in production

// there are some things that pm2 allows us to do that would be quite difficult to do with node built in model cluster

// i can delete any of my running processes from the list of processes that pm2 tracks by running command after deleting let's start with fresh cluster
//pm2 delete [server] 
// after i run above cmmand it will delete my all cluster or processes

//now i start server
//pm2 start server.js -l logs.txt -i max
// here l flag specify that where should i send my logs by specifying filename with path if you want

//we can get more detailed info about each of these processes
//pm2 show [id=0] or [name=server]

// so when you run above command so it will show us these info and it will send you lot more info metrics or details about current process that are running 
// heap size 8.69 MB
// heap used 8.69 MB
// used heap size 8.69 MB // about of memory we are using
// active requests 0
// active handles 1
// event loop latency 3.00ms // how much time it takes executing in event loop
// event loop latency p5 0.00ms
// uptime 46s // how log it has been running
// entire log path /home/anubh/Desktop/nodejs/node 6 improving node performance/1/logs.txt  // path for the log file that we specified
// script path // path of the script

// so we can manage all of our processes form our // pm2 list
// assume we detected problem with process with id 4 so we want to temporary bring it down to see what effect it has on rest of the cluster

//so we can stop if by passing individual process id
//pm2 stop 4
//and we can again start it
//pm2 start 4

// and in our folder structure we can see the logs.txt file which show our server logs and each time they were restarted 

// to moiniter and get fancy moniter or deshbord
// pm2 monit

// ----------------------------------------------
// how to use pm2 for zero down time and it's called zero down time restart

// now assume that we did some changes in our endpoint and so now our server code is changed so we want to restart our to apply our changes server but we have live users and we want to do it like that so while making chnages we want ot available our application for them. otherwise user will be gone. and these situation often can be avoided by using zero down time restart

// and if we do not update our code it will not get applied and it will run old code only

// to do zero down time restart
// pm2 restart server // but with this commad at some point our server will be unavailable for all of our users because all of the porcesses may get shurt down and it might take little time to restart

// so with zero down time restart instead of restarting all of our processes and restarting them all at once we do
//pm 2 reload server // to restart processes one by one keeping at least on process running at all times. that is the best way of updating server code when we have live users perticularly with application which is time sensitive

// so we want add this cluster script in our nasa project see photo 7 and 8

//see photo 9
// so in this nasa project we do not have database so we are saving that data in memory when some one add new data but we are now working with cluster wo for my first request it saved data and it is showing me the list of two, 1 data that we hardcode and 2 just we added but when i am calling that endpoint second time to add new data it show me list of 2 data only there should be 3, but it is one hardcoded and second that i recently added, but it is now showing me the previous one that i added

// so we are putting that hard coded data in memory of our node process for the duration while as long as our process are running 
// so when you create cluseter we are creating a each individual process and that each individual processes is storing that hard coded data in there individual memory and that memory is not being shared so if i send request to save new data to one process and then i submit another request to get that data then there is no gerenty that those two request talk to the same server to the same process.

// for our clusers to work or any of are horizontal scaling approaches to work we need make shore that our server is state less none of the server should store the state because there is no gerenty that each request is comming in will talk to the same server the solution is to remove the state form are server's memory and persist it somewhere else like database that lives indipendently outside of our node processes. so we have to remove that hard coded data and store it somewhere at data base. and that will add banifit to secure ourdata even when server crashes or restarts.

// for above problem i think we have bellow solution

// worker threads
// the worker threads module enables the use to threads that execute javascript code in parallel
// workers (threads) are useful for performing CPU-intensive oprations in parallel. those opration otherwise block our code (io and network releted task)

//does not our js code on single thread. worker thread do not change how node work at core. but they do add somting new. it make node as multi threaded language but not exactly. js as language does not have multithreading feature that wont change. so what is the difference between them. 

// worker thread in node is based on the web worker that are available in your browser with the web worker api. web worker help you to run a peace of code from your browser in worker thread but in node there is more recent feture that is still evolving as we speak. worker thread is introduce as shini new feature of v8 called v8 isolated. v8 isolate are isoleted instances of v8 engine you can see as senboxes which are runing js code indipendently. worker thread use these isoletes to create new threads that can execute your js code side by side. with each v8 isolate handling js code for one thread. worker thread just like clusters help us to take advantage of multiple cpu processors in our machine so worker thread ane similer to clusters. but they do things very diffrently cluster module uses processes while worker threads uses these v8 isolate. but how does this diffrence affect us? 

//diffrence between cluster and worker thread

// cluster
// cluster module allows us to start server which creates then master process that can use the fork() function to create child processes or worker process which can do things like respond the requests of your server and you can call fork() hower many time you like
// cluter module allowing use to run multiple instance of node in seperate process

// worker thread
// here when we run our js file we create main thread this thread then can use worker constructor to create a worker thread by calling new on the worker constructor and just like fork() function we can create as many thread we want 
// but worker thread allwing use to run multiple instances of node in same process by taking advantage of v8 isolate feture

// so flow to create worker thread both the way is almost same

//Note - you may have noticed that with the worker thread example i am not calling my main file as server.js i have taker it as index.js this is to highlight the difference that each worker thread here is not design to share request comming into server. the worker thread module does not include any build in functionality to run a server on a one port and distribute request between each thread. No that specific to cluster module. so we could a run server using worker thread but we have to implement the distribution of work by ourself. here is the main difference unlike processes maid with cluster module worker threads can share memory. with each other. 

// worker thread approach is not roack sold as cluster approach with multiple processes i highly recommend you to use cluster module in production. but what make worker thread so exciting but there are lot of potential behind how they can be used 

// how to use worker thread

const {Worker,isMainThread}=require("worker_threads")
//similarly like cluster here in worker thread also we can check that we are in main thread or not by using isMainThread
 
//new Worker(__filename);//this constructor will take a string as file name and that js code will be executed in that worker so we are passing current file name. so this code will create woker again and again until our machine no longer create new one. so one thing we want to do here that we want to create worker if we are in main thread when we run thread.js for the first time

if(isMainThread){// so here it will create only two worker but both with the ability wo run our worker code parallel(else block code) 
    new Worker(__filename);
    new Worker(__filename);
    console.log("main thread process Id",process.pid);
}else{
    console.log("worker process Id",process.pid);
    
}

// but now let demonstrate how worker thread are diffrent from processes. remember worker thread are all part of the same process. unlike cluster we run node multiple times in one process. so if here we print process id with process.pid and we do the same thing for our main thread so here we like to see three process ids like our cluster module but here our main thread share it's process id with worker thread

// output
// main thread process Id  1343
// worker process Id  1343
// worker process Id  1343

//---------------------------------------------------------------
//now let's give some tasks to our worker thread to do paraler to other threads
const {Worker,isMainThread,workerData}=require("worker_threads")

if(isMainThread){// so here it will create only two worker but both with the ability wo run our worker code parallel(else block code) 
    new Worker(__filename,{
        workerData:[4,5,45,3,32,4,3]
    });
    new Worker(__filename,{
        workerData:[4,5,45,3,32,4,3]// now this workerData will be avalable in worker thread inside of this wokerData value of variable so you can import if on top because now it's part of our worker thread moudle
    });
    console.log("main thread process Id",process.pid);
}else{
    console.log("worker process Id",process.pid);
    console.log(workerData.short());// now here we can short that inside our worker thread(because i have maltiple processors in my machine the two diffrent array that i pass in that can be sorted in parallel) so it does not block our main thread
    
} 

// so do you remmember that .short() opration on array was blocking so we want to short some diffrent array in diffrent thered to take advantage of the multiple cpu pocessors on my maching we can send work form our main thread to our worker thread by using the second parameter in our worker constructor.

//by using the worker thread we can multiply the effictiveness of our cpu my taking and advantage of it's multiple processors. processors which can run each in parallel. and because we are using worker thread module all of this happens inside one porcess most effecient way posible.