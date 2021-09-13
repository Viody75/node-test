// import os modules
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);


// method returns the system uptime
console.log(`user uptime ${os.uptime} seconds`);

const currOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currOs);
