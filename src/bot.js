import { config } from 'dotenv';
config({ path: '.env' });

import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', ()=> console.log('The bot is here :D'));
bot.on('message', async (msg) => {

    //if(msg.author.bot)return;

    //await msg .reply("Hello :D");
    // this is so that my bot will reply specifically
    if(msg.content.startsWith("wr")){
        msg .reply("Hello . I am WR Bot ヾ(≧▽≦*)o");
    }

    //this is the bot reply me in direct message
    if(msg.content.startsWith("DM")){
        msg.member.send("Hi ☆*: .｡. o(≧▽≦)o .｡.:*☆");
    }
});

bot.login(process.env.BOT_TOKEN);




