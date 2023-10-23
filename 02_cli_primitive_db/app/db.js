import fs from 'fs'

const path = './database.txt'
var database = []


try{ 
    database = JSON.parse(fs.readFileSync(path, 'utf8'))
}
catch(error) {
    console.log("Database doesn't exist. Creating new database")
}


function insertUser(name, gender, age) {
    database.push({
        user: name, 
        gender: gender,
        age: age
    })
    fs.writeFileSync(path, JSON.stringify(database))
}


function selectUser(name) {
    return database.find(user => {
        if(user.user.toLowerCase() == name.toLowerCase())
            return true; 
        else 
            return false
    })
}


function selectAll() {
    console.log(database)
}


export {insertUser, selectUser, selectAll}