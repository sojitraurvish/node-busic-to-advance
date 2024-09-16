// to improve node performace

// bast way to solve any problem is that devide problem into small chunks

//so similarly we want to divide the work and spread the load 
// how we know that js progam runs on single thread node and js does not follow multi threading approach is like java and  c++
// so what we do in node is run multiple node processes side by side allowing them to share the work among themselves like a team works for common objective

//assume that we have 4 node processes that takes 4 request individually and each precesses responsd in same way and they each contain a copy of your same server code so first request can goes to first process and second request goes to second process and so on. 

// so here we takes the advantage of multiple cpu cors or create multiple server processes and it will run without affecting the rest other precess on cpu cors

//see photo 1