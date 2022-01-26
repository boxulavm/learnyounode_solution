const filteredLs = require('./mymodule.js')

const dir = process.argv[2]
const extension = process.argv[3]

filteredLs(dir, extension, (err, data) => {
  if(err){
    console.log(err)
    return
  }

  let str = ''
  data.forEach(element => {
    str += element+'\n'
  });
  console.log(str)

})