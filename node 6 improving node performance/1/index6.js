// remember how we mentioned the round robin approach
// round robin is the one approach that is being used for load balancing

// load balancing mean how our requests are devided among different process

// load balancer takes the request form user and distribute them so that responsiblity of handling those requests is shared between many diffrent process or potentially many diffrent applications for e.g you have two diffrent servers(two diffrent machines) each running a set of processes that can handle requests you with load balancer you can distribute requests among those two servers and to many diffrent process inside of that servers

// load balancer is applied when you are running more than one server or process paralelly each handling same kind of requests using a same set of posible routes

// you might talked about load balancing in the context of horizontal scaling. 

// horizontal scaling is a fancy term for what we are doing with our clusters rather than doing vertical scaling


// the two most comman strategy for load balancing is round robin and randomized distribution

//round robin: when we do not have know how much time request will take to complete when you have server with many diffrent type of request that sometimes takes longer and sometimes takes shorter

//randomized distribution: each new request is assigned to a one of the process at random

// when you do not have knowlege that how long time request can take use round robin 

// Note : in node we can use cluster module to do load balancing of requests as they come in to our node http server and the cluster module uses the round robin approach to ditermine which process will handle the request

// cluster module is greate tool to imporve the perfomance of node server many other fetures are comanly asked for when running clustered servers in production. and the good news is that we have a really superb tool built on the functionality in the cluster module that includes any functionality  you could positionally need. this is the PM2 tool which use the cluster module internally (under the hood) but pm2 provides many added capabilities to help you manage that cluster. You may need to restart your cluser if there is a code is changed just like we do with nodemon when running just one process and for that pm2 has WATCH & RESTART mode or you may want to restart processes automatically if there is failure in one of process so we can lock for RESTART STRATEGIES (in pm2 document) or GRACEFUL SHUT DOWN STRATEGY. we might want to monitor the status of our processes or manages logs of each process code. pm2 is reach when it comes to fetures and it widely used even in a projects that does not use node

// we can find pm2 in our npm let set up pm2 and manage clusters

//see photo 2,3,4,5,6 for above info

// and now lets use pm2












