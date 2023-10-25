const { program } = require('commander');
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')


const token = 'TOKEN PROVIDED BY BOT FATHER'
const chatId = 'YOUR TELEGRAM ID (CAN BE FOUNDED BY USING @my_id_bot)'


const bot = new TelegramBot(token)

program.version('1.0.0')
program.name('Telegram console sender')


program
    .command('send-message')
    .argument('<message>')
    .aliases(['m', 'message'])
    .description('Send message to Telegram Bot')
    .action((message)=>{
        try{
            bot.sendMessage(chatId, message)
        }
        catch(error) {
            console.error('Something went wrong')
        }
    })

program
    .command('send-photo')
    .argument('<path>')
    .aliases(['p', 'photo'])
    .description('Send photo to Telegram Bot. Just drag and drop it console after command')
    .action((path)=>{
        try{
            bot.sendPhoto(chatId, path)
        }
        catch(error) {
            console.error('Something went wrong')
        }
    })



function main() {
    program.parse(process.argv);
}

main()

