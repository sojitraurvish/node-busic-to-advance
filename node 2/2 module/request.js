function encrypt(data) {
    return 'encrypted data';
}

function send(url,data){
    const encryptedData=encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports={
    encrypt,
    send
}; //this is good  why to do that why ?

//print module
//go to node repal and require.extainsions
//so if you do not write .js extainsion it will take it from require.extensions
//here default first extainsion is .js then .json and .node
//but for .jsx you have to write

// we can also write module.exports.send =function(){}
//and short hand is exports.send=function(){}

//what if you user require function two time and import same code will it run 2 times
//no it cash that module and it will not run 2 times instead it will check in cache and run from there 
// log(require.cache)
// and after importing any function if add module.exports.send=function(){new defination} in it so for that file it will take new defination when you call it but in diffrent file it will behave by default

//npm init -y is default option 
//npm i --save <package name>
//npm i --save-dev or -D <package name>
//npm i -g <package name>
// npm run start or npm start
// but for other then start you have to use run prefix
//npm i to install packages that are not in package.json


//versioning Major.Minor.Patch

// 1) Major version when you make incompatible API changes (release completely different version of code)
// 2) Minor version when you add functionality in a backwards-compatible manner (adding more features)
// 3) Patch version when you make backwards-compatible bug fixes (small bug changes)

//package.lock.json - mach more distance from package.json

//for 0.0.1 see web site semver.npmjs.org

//^ 0.3.1 in it is less then 1 then it will only take 0.3.1 0.3.2 0.3.3 not 0.4.0 other then that it matches all versions
//~ 0.0.1 to match only patch versions

//vernability see photo 1 2 3 4 5
// here see how to upgrade pageckage using npm audit and fix

//nodemon
//this command only work in package.json script
//but it's executable file available inside node_modules/nodemon/bin/nodemon .bin folder
//so to make it run on console we have to write ./node_modules/.bin/nodemon server.js

// and if we want to use install nodemon in our machine we have to install it using npm i -g nodemon
// so instead of node_modules folder it install in our machine
// and you can use it in all the poject by installing once