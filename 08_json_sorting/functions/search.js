function startSearching(json, key) {
    if(Array.isArray(json)) {
        return searchInArray(json, key)
    }
    else if(typeof json === 'object' && key !== null) {
        return searchInObject(json, key)
    }
    return undefined
}


function searchInObject(json, key) {
    if(json.hasOwnProperty(key))
        return json[key]

    let keyAnswer = undefined
    Object.keys(json).every(k => {
        keyAnswer = startSearching(json[k], key)
        if(keyAnswer !== undefined) 
            return false
        return true
    })
    return keyAnswer
}


function searchInArray(json, key) {
    let keyAnswer = undefined
    json.every(element => {
        keyAnswer = startSearching(element, key)
        if(keyAnswer !== undefined) 
            return false
        return true
    });
    return keyAnswer
}

module.exports = { 
    startSearching
}