const http = require('http')

const url = process.argv[2]

http.get(url, (response) => {
  response.setEncoding('utf8');

  let data = ""

  response.on('data', (chunk) => {
    data += chunk
  })

  response.on('end', (chunk) => {
    console.log(data.length + '\n' + data)
  })

})
