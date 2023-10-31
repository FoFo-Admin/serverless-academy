const fs = require('fs')


function readFilesInDir(dir) {
    let filesArr = []

    files = fs.readdirSync(dir)
       
    files.forEach(file => {
        filesArr.push(fs.readFileSync(dir+"/"+file, 'utf-8'))
    })

    return filesArr
}

module.exports = {
    readFilesInDir
}