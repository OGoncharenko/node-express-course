const express = require('express');
const app = express();
const peopleRouter = require('./routes/people')

app.use(express.json())
app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended: false}))

app.use('/api/people', peopleRouter)


app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})
