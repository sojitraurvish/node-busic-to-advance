//here there are two ways to read csv file with this csv-parse package
// 1) using stream (we prefer this way because here we do not have to wait for entire file to be read and we can read it line by line and perform oprations)
// 2) using async await(call back) (here we have to wait for entire file to be read and we can read it line by line and perform oprations)

//because here we have 1000000 records in csv file so it will take some time to read it
//but what if we will have 10000000 records in csv file so it will take some time to read it
// that way we are going with stream way

const parse = require("csv-parse");// this function will help us to formate data in human readable format adn if you want to do some different parse you can file appropreate parsing library this libray is for csv file data processing
const fs = require("fs");

//parse();//this function returns a readable stream and it does not deal with file direactly so that way we requrie node's built in fs module because it provides function like fs.open and fs.read() as string of text and it also provide function fs.createReadStream() this funciton open a file as readable stream and we jsut need to pass path and this readable stream is a event emitter, which emits various kind of events happening with that file like close, error, data. and here we get data in pices so we can perform oprations on it instead of reading it all at once

const results = [];

fs.createReadStream("kepler_data.csv") // so this funciton is reading row data form file in form of bits and bytes but still we need to parse it to see human readable data
  .pipe(parse({
    comment:"#", //line start with # that is comments
    columns:true // this will return each row array of objects in js file with key value pare
  }))
  .on("data", async function (data) {
    results.push(data); // here we get buffer of data and node uses it to represent as collection of bytes
  })
  .on("error", function (err) {
    console.log(err);
  })
  .on("end", function () {
    console.log(results);
    console.log("done");
  }); //Note : right now values are comming as buffer but we want it to parse as comma seperated values that the functionality that parse function give us from csv-parse package. now want is the bast approach to do so. beacuse the parse function is designed to be used with streams so we can pipe the output of our file so we can pipe function and pasing the result of parse() function like .pipe(parse())
  //pipe function is meat to connect readable stream sorce to writable stream destination
  //so here fs.createReadStream("kepler_data.csv") this is the sorce and parse() is the destination .pipe(parse()) (see photo 1)