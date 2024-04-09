import dotenv from 'dotenv';
dotenv.config();

import { bot } from './bot';

const URL = 'https://boom-up-game.vercel.app/'

bot.on('callback_query', async query => {
    await bot.sendPhoto(query.from.id, 'https://i.ibb.co/Zf6pKKt/Frame-23447.png')
    await bot.sendPhoto(query.from.id, 'https://i.ibb.co/wwMsj40/Frame-23448.png')
    await bot.sendPhoto(query.from.id, 'https://i.ibb.co/QpmtrR2/Frame-23449.png')
})

bot.on('message', async msg => {
    await bot.setChatMenuButton({
        chat_id: msg.chat.id, menu_button: {
            type: 'web_app',
            text: 'Play',
            web_app: { url: URL + `?tgid=${msg.chat.id}&username=${msg.chat.username}&firstname=${msg.chat.first_name}&lastname=${msg.chat.last_name}` }
        }
    })
    await bot.sendPhoto(msg.chat.id, 'https://i.ibb.co/prsWVL0/TG-bot-Lucky-Dice-3-1-1.png', {
        caption: `Hi! 🤪Here is the 🎲Lucky Dice launched by BOOMUP.

Click on the dice to prove your luck and win points rewards. 🤑Good luck never requires too much thinking.

Invite your friends, as good luck can truly be contagious among each other.🍀

Roll dice,earn points now! Air drop coming soon!🎁🎁🎁`,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🎲 Rolling!",
                        web_app: { url: URL + `?tgid=${msg.chat.id}&username=${msg.chat.username}&firstname=${msg.chat.first_name}&lastname=${msg.chat.last_name}` },
                    }],
                [{
                    text: 'X',
                    url: 'https://twitter.com/Boomup_Official'
                },
                {
                    text: 'Join Community',
                    url: 'https://t.me/boomup_chat_1',
                }],
                [
                    {
                        text: 'Invite friends',
                        url: 'https://t.me/share/url?url=https://t.me/Boomup_game_bot/boomup_game&text=Win%20a%20Massive%20Airdrop,%20Points,%20and%20Limited%20Edition%20NFTs'
                    }],
                [
                    {
                        text: 'How to play',
                        callback_data: 'how_to_play'
                    }]
            ],
        }
    })
})

bot.onText(/\/login/, async msg => {
    await bot.sendMessage(msg.chat.id, 'Please use /connect command to connect your wallet', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Launch",
                    web_app: { url: URL + `?tgid=${msg.chat.id}&username=${msg.chat.username}&firstname=${msg.chat.first_name}&lastname=${msg.chat.last_name}` },
                }]
            ],
        }
    })
})
