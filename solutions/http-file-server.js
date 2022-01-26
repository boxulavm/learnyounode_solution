const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const pathToFile = process.argv[3]

const server = http.createServer( (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(pathToFile).pipe(res)
})

server.listen(port)