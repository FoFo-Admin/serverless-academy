const axios = require('axios')


async function getForecast(key, city, hours) {
    request = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`)
    if(hours == '3') 
        return request.data.list.slice(0, 10)
    else
        return request.data.list.filter((value, index) => {return index % 2 == 0}).slice(0,10)
}

module.exports = {
    getForecast
}