const Discord = require("discord.js");
const dotenv = require('dotenv');
const fs = require('fs');
const { Client, GatewayIntentBits, ButtonBuilder, EmbedBuilder, ActionRowBuilder, AttachmentBuilder} = require('discord.js');

export default async function discordHandling (job){
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
    client.once('ready', () => {
    
    const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);
    client.login(process.env.TOKEN);

    const audioFile = fs.readFileSync('/home/feelset/Feelset/pages/api/uploads/0767942b77f1f753b5f0acf07.mp3');
    const song = new AttachmentBuilder(audioFile, {name: 'song.wav'});
    
    const embed = new EmbedBuilder()
        .setTitle('Example Message')
        .setDescription('New song who dis?')
    const approveBtn = new ButtonBuilder()
        .setLabel('Approve')
        .setCustomId('approve')
        .setStyle('Success');
    const denyBtn = new ButtonBuilder()
        .setLabel('Deny')
        .setCustomId('deny')
        .setStyle('Danger');
    const row = new ActionRowBuilder()
        .addComponents(approveBtn, denyBtn);

    channel.send({ embeds: [embed], components: [row], files: [song] });
    })

    await client.login(process.env.TOKEN);
}




