const fs = require('fs')
const { reconstructJSON } = require('./functions/utils')


const file = "./data.json"
const saveFile = "./new-data.json"


function main() {
    data = require(file)
    newData = reconstructJSON(data)
    fs.writeFileSync('./new-data.json', JSON.stringify(newData, undefined, 4))
}

main()