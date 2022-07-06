const os = require('os')

// info about current user
const user = os.userInfo()

// console.log(user)

// return the system uptime in seconds

console.log(`the system uptime is ${os.uptime()/60} seconds`)


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


console.log(currentOs)