const { createReadStream } = require('fs');

const readStream = createReadStream('./content/big.txt', {highWaterMark: 200, encoding: 'utf8',})

readStream.on('data', (result) => {
    console.log(result)
 })

 readStream.on('error', (err) => console.log(err))