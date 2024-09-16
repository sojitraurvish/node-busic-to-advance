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

// i can delete any of my running processes from the list of processes that pm2 tracks by running command
//pm2 delete