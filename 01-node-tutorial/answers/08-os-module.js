const os = require("os");

const user = os.userInfo();
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totakMem: os.totalmem(),
    freeMem: os.freemem(),
    platform: os.platform(),
    machine: os.machine(),
}
console.log(currentOS);