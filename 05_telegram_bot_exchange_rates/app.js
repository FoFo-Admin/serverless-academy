const TelegramBot = require("node-telegram-bot-api")
const { getForecast } = require('./api/forecast') 
const { KEYBOARDS } = require('./utils/keyboards')
const { forecastMessage, exchangeMessage } = require('./utils/messages')
const { getMono, getPrivat } = require('./api/exchange')

const TOKEN_BOT = 'BOT FATHER TOKEN'
const TOKEN_WEATHER = 'OPENWEATHERMAP API KEY'
const CITY = 'Kharkiv'


const bot = new TelegramBot(TOKEN_BOT, {polling: true});


bot.on('message', async message => {
    var interval = ''

    switch(message.text) {
        case '/start':
            return bot.sendMessage(message.chat.id, 'Select an option', {reply_markup: KEYBOARDS.main})

        case 'Forecast in Kharkiv': 
            return bot.sendMessage(message.chat.id, 'Select an interval', {reply_markup: KEYBOARDS.forecast})

        case 'At intervals of 3 hours': 
            interval = '3'
        case 'At intervals of 6 hours': 
            interval ? interval : interval = '6'
            weather = await getForecast(TOKEN_WEATHER, CITY, interval)            
            return bot.sendMessage(message.chat.id, forecastMessage(CITY, weather))

        case 'Exchange rates': 
            return bot.sendMessage(message.chat.id, 'Select a currency', {reply_markup: KEYBOARDS.exchange})

        case 'EUR': 
            return bot.sendMessage(message.chat.id, exchangeMessage('EUR', await getMono('EUR'), await getPrivat('EUR')))

        case 'USD': 
            return bot.sendMessage(message.chat.id, exchangeMessage('USD', await getMono('USD'), await getPrivat('USD')))

        case 'Back':
            return bot.sendMessage(message.chat.id, 'Select an option', {reply_markup: KEYBOARDS.main})

        default:
            bot.sendMessage(message.chat.id, 'No such option. Write command /start')
            break;
    }
})

