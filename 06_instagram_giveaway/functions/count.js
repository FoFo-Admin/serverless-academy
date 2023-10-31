function uniqueValues(data) {
    let unique = new Set() 

    data.forEach(value => {
        value.split('\n').forEach(line => {
            unique.add(line)
        });
    })

    return unique.size
}


function existInAllFiles(data) {
    let usernamesCount = 0
    let values = new Map() 

    data.forEach(value => {
        new Set(value.split('\n')).forEach(line => {
            if(values.has(line)) {
                values.set(line, values.get(line)+1)
            }
            else {
                values.set(line, 1)
            }
        });
    })

    values.forEach((value, key) => {
        if(value == data.length)
            usernamesCount++
    })

    return usernamesCount
}


function existInAtleastTen(data) {
    let usernamesCount = 0
    let values = new Map() 

    data.forEach(value => {
        new Set(value.split('\n')).forEach(line => {
            if(values.has(line)) {
                values.set(line, values.get(line)+1)
            }
            else {
                values.set(line, 1)
            }
        });
    })

    values.forEach((value, key) => {
        if(value >= 10)
            usernamesCount++
    })

    return usernamesCount
}


module.exports = {
    uniqueValues,
    existInAllFiles,
    existInAtleastTen
}