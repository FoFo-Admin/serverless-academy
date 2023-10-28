const TelegramBot = require("node-telegram-bot-api")
const { getForecast } = require('./api/forecast') 

const TOKEN_BOT = 'BOT FATHER TOKEN'
const TOKEN_WEATHER = 'OPENWEATHERMAP API KEY'
const CITY = 'Kharkiv'


const bot = new TelegramBot(TOKEN_BOT, {polling: true});


bot.on('message', async message => {
    if(message.text == '/start') {
        bot.sendMessage(message.chat.id, 'Select an option',{
            reply_markup: {
                inline_keyboard: [
                    [{text:'Forecast in Kharkiv', callback_data: 'option:forecast'}]
                ]
            }
        })
    }
    else {
        bot.sendMessage(message.chat.id, 'No such option. Write command /start')
    }
})


bot.on('callback_query', async query => {
    data = query.data.split(':')

    switch(data[0]){
        case 'option':
            if(data[1] == 'forecast') {
                return bot.editMessageText('Forecast in Kharkiv', {
                    chat_id: query.message.chat.id,
                    message_id: query.message.message_id,
                    reply_markup: {
                        inline_keyboard: [
                            [{text:'At intervals of 3 hours', callback_data: 'forecast:3'}],
                            [{text:'At intervals of 6 hours', callback_data: 'forecast:6'}]
                        ]
                    }
                })
            }

        case 'forecast':
            weather = await getForecast(TOKEN_WEATHER, CITY, data[1])

            weatherMessage = `Weather for city ${CITY}\n\n\n`

            weather.forEach(value => {
                weatherMessage += `Weather for ${value.dt_txt}
\t${value.weather[0].main}(${value.weather[0].description})
\t${value.main.temp}°C (feels like ${value.main.feels_like}°C)
\tAir pressure: ${value.main.pressure}hPa
\tHumididty: ${value.main.humidity}%
\tWind speed: ${value.wind.speed}m/s\n\n`
            })
            return bot.sendMessage(query.message.chat.id, weatherMessage)
        default: 
            bot.sendMessage(query.message.chat.id, 'No such option. Write command /start')
            break;
    }
})
