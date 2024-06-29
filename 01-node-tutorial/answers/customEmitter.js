const EventEmitter = require("events");  

const myEmitter = new EventEmitter();  

myEmitter.on('login', (userName) => {
    console.log(`${userName} has logged in`);
    myEmitter.emit('success', userName);
})
myEmitter.on('welcome', (userName) => {
    console.log(`Welcome, ${userName}!`)
})

myEmitter.emit('login', 'Ivan')
myEmitter.emit('welcome', 'Ivan')
myEmitter.emit('login', 'Kyle')
myEmitter.emit('welcome', 'Kyle')
