const EventEmitter = require('events'); // event emitter is capitalize because it's a class

const celebrity = new EventEmitter();

// Subscribe or (follow) to celebrity for observer 1
celebrity.on('race win', () => {
   console.log('I am observer 1'); 
}) 

// Subscribe or (follow) to celebrity for observer 2
celebrity.on('race win', () => {
   console.log('I am observer 2'); 
}) 


celebrity.emit('race win');
celebrity.emit('race lost');
celebrity.emit('race win');

// The process object is an instance of EventEmitter
// console.log(process)

// const process = require('node:process');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => { // this process also emited from somewhere when node exits
  console.log('Process exit event with code: ', code);
  // process.exit(0); mean there is no error
  //and number above 0 mean there is errorconst process = require('node:process');

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
  
  console.log('This message is displayed first.');
});

console.log('This message is displayed first.');