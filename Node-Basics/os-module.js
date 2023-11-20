const os = require('os')
// console.log(os.uptime())
const uptime = os.uptime()
console.log(`The system uptime is ${uptime} seconds!!`)
const currUser = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    availMem:os.totalmem()-os.freemem()
}
console.log(currUser)