// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// const cpus = os.cpus();
// for (let i = 0; i < cpus.length-2; i++) {
//     const CPUcore = cpus[i]
//     console.log('Run new node.js process', i, '\n');
// }

// console.log(process.pid);

const os = require('os');
const cluster = require('cluster'); 

const cpus = os.cpus();

if (cluster.isMaster) {
    for(let i = 0; i < cpus.length; i++){
        cluster.fork();
    }
} else {
    setInterval(() => {
        console.log(`Process with pid = ${process.pid} still work`);        
    }, 5000); 
}