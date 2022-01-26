const fs = require('fs')

const dir = process.argv[2]
const extension = process.argv[3]

fs.readdir(dir, 'utf8' ,(err, data) => {
  if(err){
    console.log('dir not exist')
    return
  }

  const filtered = data.filter(elem => elem.endsWith('.'+extension))

  let str = ''
  filtered.forEach(element => {
    str += element+'\n'
  });

  console.log(str)
})