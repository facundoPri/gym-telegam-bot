// paquetes
const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN  || process.env.BOT_TOKEN || '1032944878:AAHCBWU5qGcNmqC6Jb6cn84dtvvo4qAV_Gs')
expressApp.use(bot.webhookCallback('/webhooks/telegram'))
bot.telegram.setWebhook('https://gym-telegram-bot.herokuapp.com//webhooks/telegram')

const port = process.env.PORT || 3000

expressApp.get('/', (req, res) => {res.send('Hello World!')})

expressApp.listen(port, () => {
  console.log(`GymBot listening on port ${port}!`)
})

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))


