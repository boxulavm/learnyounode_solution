const http = require('http')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

const results = []
let count = 0

urls.forEach((url,i) => {

  http.get(url, (response) => {
    response.setEncoding('utf8')

    let dataURL = ""

    response.on('data', (chunk) => {
      dataURL += chunk
    })

    response.on('end', () => {
      results[i] = dataURL
      count++

      if(count === urls.length){
        console.log(results.join('\n'))
      }

    })

    response.on('error', (e) => {
      console.log(e)
    })

  })
})