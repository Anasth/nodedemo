const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello ya prince')
    }
    if (req.url === '/about') {
        res.end('THis is About 3ash')
    }
    res.end(`
    <h1> OOOOops! </h1>
    <p> This is not here ya ma3lim</p>
    <a href = "/" > back l wara </a>
    `)
})


server.listen(4000)