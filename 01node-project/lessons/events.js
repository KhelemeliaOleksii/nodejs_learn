const Emitter = require('events');

const emitter = new Emitter();

// // use events listener construction
// emitter.on('message', (data, second, third) => {
//     console.log(`You send data ${data}\n`);
//     console.log(`Second argue ${second}\n`);
//     console.log(`Third argue ${third}\n`);
// })

// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123);
// } else {
//     emitter.emit('message', "Your message is empty");
// }

// // use event listener only once
// const callback = (data, second, third) => {
//     console.log(`You send data ${data}\n`);
//     console.log(`Second argue ${second}\n`);
//     console.log(`Third argue ${third}\n`);
// }
// emitter.once('message', callback)
// // work only the first one
// emitter.emit('message');
// // not work more
// emitter.emit('message', "jsfj", "dsjkd");
// emitter.emit('message');
// emitter.emit('message');

// emitter.removeAllListeners();
// //or 
// emitter.removeListener('message', callback);