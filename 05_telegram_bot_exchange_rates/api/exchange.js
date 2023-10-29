const axios = require('axios')
const NodeCache = require( "node-cache" )


const CACHE = new NodeCache();


const CURR_CODES = {
    USD: 840,
    EUR: 978,
    UAH: 980
}


async function getMono(currency) {
    try {
        request = await axios.get("https://api.monobank.ua/bank/currency") 
        CACHE.set("mono", request.data)
    }
    catch(error) {
        console.log("Too many requests to monobank")
    }
    finally {
        return CACHE.get("mono").find(value => {
            return (value.currencyCodeA == CURR_CODES[currency] && value.currencyCodeB == CURR_CODES['UAH'])
        })
    }
}

    


async function getPrivat(currency) {
    requestCash = await axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5")
    requestCard = await axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11")

    return {
        cash: requestCash.data.find(value => {
            return value.ccy == currency
        }),
        card: requestCard.data.find(value => {
            return value.ccy == currency
        }) 
    }
}

module.exports = {
    getMono,
    getPrivat
}