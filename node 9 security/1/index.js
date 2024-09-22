//https ssl/tls protocol

// tls is the newer verion of this protocol

//ssl1.0, ssl2.0, ssl3.0,tls1.0 .... and so on

//http + ssl or tls
//https

//digital certificate
// free certificate letsencrypt.org
//give you free certificate
// but if you have domain and it can allow if ip is somewhere and domain is somewhere

// and that way we use salf signed certificate

// how to tell our node server respond to https reequest

//app.get("/secret",(req,res)=>{
// return res.send('your presonal secrent is 42')
//})

// now to make this data encrypted so no one can see it
// see photo 1, 2 how to do it 

// helmet add some impotent headers and it add lot of meddleware that you can see on it's package
// it is individul video so you can watch individually

//authentication 401 anautohrized-> use is who he calm to be
//authorization 403 forbidden-> user have permission to do that


// there are three tool that developer uses to make three api secure
// so that only authorized user can access that server and it's api
// some time we restrict access with api key, auth token, and some tim we also use jwt tokens

// let start with api key we use it for two perpose
// is unique identifire for your applicaiton so that that your sever knows that from which application your request came from   
// restrict access of some apis ->  and also if server want to rate limit to your api 

//jwt is access token and this is also know as bearer auth
//other type of access token is opack token follows some formate that not understood by server to validate these kind of token our api request to other servers that server issued that token 

// {
//     "sub":""//subejt identifire who have created it
//     "iat":""//time and date when token was issued
// }

// oauth oauth2