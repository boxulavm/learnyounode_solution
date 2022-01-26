const http = require('http')
const https = require('https')

const url = process.argv[2]
const prefix = url.substring(0,8)

if (prefix === 'https://'){

  https.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      console.log(data);
    })
  })

} else {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      console.log(data);
    })
  })
}