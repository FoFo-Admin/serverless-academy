function forecastMessage(city, weather){ 
    weatherMessage = `Weather for city ${city}\n\n\n`

    weather.forEach(value => {
        weatherMessage += `Weather for ${value.dt_txt}
\t${value.weather[0].main}(${value.weather[0].description})
\t${value.main.temp}°C (feels like ${value.main.feels_like}°C)
\tAir pressure: ${value.main.pressure}hPa
\tHumididty: ${value.main.humidity}%
\tWind speed: ${value.wind.speed}m/s\n\n`
    })
    return weatherMessage
}


function exchangeMessage(currency, mono, privat) {
    return `Exchange rates ${currency}/UAH

Monobank:
    Buy: ${mono.rateBuy}
    Sell: ${mono.rateSell}
    
PrivatBank (cash): 
    Buy: ${privat.cash.buy}
    Sell: ${privat.cash.sale}
    
PrivatBank (digit): 
    Buy: ${privat.card.buy}
    Sell: ${privat.card.sale}`
}


module.exports = {
    forecastMessage,
    exchangeMessage
}