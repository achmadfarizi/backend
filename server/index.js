const express = require('express')

const router = require('./src/routes')

const app = express()
const port = 5001

app.use(express.json());

app.use('/api',router)

app.listen(port, () => { console.log(`listening on port ${port}`)})