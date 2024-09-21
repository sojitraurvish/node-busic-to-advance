// when we connect our mogodb with node app
// it require to pass some parameters which are 
//{// to avoid warning
// useNewUrlParser: true, // this true mean we want part the mongo url which we are passing
// useFindAndModify: false //this disable the outdated way of updating data using this find and modify function
// useCreateIndex: true // which will use this CreateIndex function rather than older sure index function
// useUnifiedTopology: true// this way mogoose will use  the updated way of talking to clusters of mongo databases using this unified topology approach
// }

// all of this these are options in mogodb driver that mongo uses to connect to our databases

// but how do we check that our connection is working our mogose object expose one poperty which is this

// mogoose.connection// this connection is event emitor which emmit event once connection is ready or connection is suceess or there is an error

//mogoose.connection.on('open', () => {
//  console.log('Mongo Db conneciton is ready');})

// here we know that our open event only get triggered once but we can use .once (this feature is all node event emiter have) which allows this 'open' event to trigger this call back only once the first time it executed
// mogoose.connection.once('open', () => {
//  console.log('Mongo Db conneciton is ready');})

// now we do not know when our error get triggered and deffinately more then once
//mogoose.connection.on('error', (error) => {
//  console.error(error);  
//})

// and we can put these event handler any whare in file befere of after starting server


//mogoose.model("Launch",lanchSchema)

//Launch should be singular name that this model represent mogoose then take that what you pass on make it lower case it make it prular  like "launches"

// instead of mongo create function this save data
// we use insert + update = upsert
// but in upsert update part only done if data exists


// find({})
// find({name:"urvish"})
// find({name:"urvish"},"-fname name")//second string is projection 
// find({name:"urvish"},{'_id':0,'__v':0})//second object is projection 


//upsert so instead of create use this
// updateOne({name:"urvish"},{name:"urvish update"})
// by default updateOne will use find (first object fined that filed) and update (seconde object update it) function 
// but we can use updateOne({name:"urvish"},{name:"urvish update"},{upsert:true})//this is what upsert now as first object it check that document exists if it exists then update do not do any thing or if does not exist then it will create or insert new one (with second object)

// findOne({name:"urvish"}).sort('flightNumber') ascending
// findOne({name:"urvish"}).sort('-flightNumber') descending

 // when we use upsert it send us one flag $setOnInsert":{"__v":0} so why send more info fo r hackers so instead of updateOne use findOneAndUpdate now it will not send that extra property but 

//  Note updateOne without upsert gives back lot of metadata like .ok for opration successed or not for update

// jest video 32 33 in database section tast case for our mogoose database and watch vides for test and also do not forget to watch versioning test in space x module 4 video

