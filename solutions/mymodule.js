const fs = require('fs')

module.exports = function filteredLs(dir, extension, callback) {

  fs.readdir(dir, 'utf8' ,(err, data) => {
    if(err){
      return callback(err)
    }
  
    const filtered = data.filter(elem => elem.endsWith('.'+extension))
  
    return callback(null, filtered)
  })

}