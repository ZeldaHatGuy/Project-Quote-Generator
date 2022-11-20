const express = require('express')
const app = express()
const path = require('path')
const router = express.Router();


 router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
 });


app.use(express.static(`${__dirname}/public`))
app.use('/', router);
app.listen(8080)
console.log("server is running")