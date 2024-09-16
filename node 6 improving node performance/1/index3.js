//real life blocking functions
// there two function that is 
// JSON.stringify({}) takes object and return string representation of that
// JSON.parse("") while this do the opposite

// but these function does not take 9s to finish even when there is big objects
// but if you have server that takes many request specially when every request uses above any function
// if your request takes 10ms now for second request it time gets double because for 10ms it will process only first request then it will start executing second request so second request will take 20ms to serve

//other task that is our array's short function 
//[2,3,4,53,3,3].short(); so here we are blocking our event  loop or our thread until these number are shorted 

// for very large array or object(JSON.s) these function start becomming very slow

// and we have certain function build in our node crypto module which has function related to cryptography and security which are design to execute slowly so that it takes long time for hackers to guess your password
//we have crypto.pbkdf2 and crypto.script function which know as key derivation functions to create hash of users password

// so these function are too havery to execute in our event loop or our js main thread

// now lets see how we can improve node performance