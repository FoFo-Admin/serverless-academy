function reconstructJSON(data) {
    let users = []

    data.forEach(element => {
        let isUserExist = false
        users.every(user => {
            if(element.user._id == user.userId) {
                user.vacations.push({
                    startDate: element.startDate,
                    endDate: element.endDate
                })
                isUserExist = true
                return false
            }
            return true
        })
        if(!isUserExist)
            users.push({
                userId: element.user._id,
                userName: element.user.name,
                vacations: [{
                    startDate: element.startDate,
                    endDate: element.endDate
                }]
            })
    });

    return users
}


module.exports = {
    reconstructJSON
}