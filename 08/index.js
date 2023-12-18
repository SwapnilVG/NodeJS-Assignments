const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('subscribe',(msg)=>{
    console.log((`Thanks For Subscribing to ${msg}`))
})

// eventEmitter.emit('subscribe','College Wallah')


let subscribeMessage = (channelName)=>{
    console.log(`Thanks For Subscribing to ${channelName}`)
};
eventEmitter.addListener('subscribe',subscribeMessage);
eventEmitter.emit('subscribe',"College Wallah");