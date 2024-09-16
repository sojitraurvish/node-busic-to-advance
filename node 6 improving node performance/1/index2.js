// before improving the performace let's first see how we can block event loop

const express=require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("performance example ")
})

function delay(duration){//miliseconds
    const startTime=Date.now();
    while(Date.now()-startTime<duration){
        // while js is loop this while loop js will be blocked because this loop will be process by event loop because it is not any i/o opration or network opration so it will not going to be send to thread pull or pass to the oprating system like of our node functions
        // so here event loop is completly blocked...
    }
}

app.get("/timer",(req,res)=>{
    // delay the response
    delay(9000); // so for 9000ms or 9s our server can do anything else while this delay function is executing. so it can not process other request,or parse files,or make queries to our db, no other js code will be processed,
    // so now you make request it will block our js thread and will will not be able to request other api sill until it finishes it's task for 9000ms. open two tab in browser and see if it works. and in first tab req timer api and in second / api then / api will not start it's word until time finises it's work
    //so there should be diff approach to fix that
    //but this delay function we can put inside setTimeout so it is not real life delay function now let see real life delay functions 
    res.send("Ding ding ding")
})

app.listen(3000)