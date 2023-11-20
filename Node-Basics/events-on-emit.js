const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log(`data received`);
})
// customEmitter.on('response',(name,age)=>{
//     console.log(`some other logic here, name:${name}, age:${age}`);
// })
customEmitter.emit('response')