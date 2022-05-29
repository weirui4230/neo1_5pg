import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', ()=> console.log('The bot is here :D'));

bot.login('OTM0Njc4MTIzMTgwNTk3Mjc4.Gkanvf.E8Sy7ElJdT7A8KbA-9OlUQs83U5YMAxGFhlD3k');