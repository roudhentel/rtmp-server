const express = require('express')
const { restart } = require('nodemon')
const app = express()

app.use(express.urlencoded())

app.post('/auth', (req, res) => {
    const streamkey = req.body.key

    if (streamkey === 'supersecret') {
        res.status(200).send()
        return
    }

    restart.status(403).send()
})

app.listen(8000, () => {
    console.log(`listening on port 8000!`)
})