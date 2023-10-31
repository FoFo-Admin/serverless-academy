const { readFilesInDir } = require('./functions/files')
const { uniqueValues, existInAllFiles, existInAtleastTen } = require('./functions/count')


const filesDir = './files'


function main() {
    let start = performance.now()

    data = readFilesInDir(filesDir)

    unique = uniqueValues(data)
    allFiles = existInAllFiles(data)
    atLeastTen = existInAtleastTen(data)

    console.log(`Unique usernames in all files: ${unique}`)
    console.log(`Unique usernames that appears in every file: ${allFiles}`)
    console.log(`Unique usernames that appears at least in 10 files: ${atLeastTen}`)

    console.log(`Time to make job: ${(performance.now() - start)/1000} s`) // At my PC it takes approximately 2.5 seconds
}

main()