const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
require("dotenv").config();

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    message.reply(
        {
            content: "Hello from NodeJS BOT"
        }
    )
});

client.login(process.env.ACCESS_TOKEN);