const {request,get}= require('https');

//get does the same things but it is used when we want to get data from server
//and if we use get function we do not need to call res.end() it call directly
// get('https://www.google.com', (response) => { 
//     response.on('data', (chunk) => {//chunk is a buffer
//         console.log('data chunk',chunk.toString());
//     })
//     response.on('end', (data) => {
//         console.log('no more data',data);
//     })
// })

const res=request('https://www.google.com', (response) => { 
    response.on('data', (chunk) => {//chunk is a buffer
        console.log('data chunk',chunk.toString());
    })
    response.on('end', (data) => {
        console.log('no more data',data);
    })
})

res.end("urvish");//this function will trigger the res to be send to client as a response if i dont write this it will not send anything


// right now we are using require('http') so i have to use http protocol in url http://www.google.com here i can write https://www.google.com otherwise it will give error protocol does not match