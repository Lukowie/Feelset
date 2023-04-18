const Discord = require("discord.js");
const dotenv = require('dotenv');
const fs = require('fs');
const { Client, GatewayIntentBits, ButtonBuilder, EmbedBuilder, ActionRowBuilder, AttachmentBuilder} = require('discord.js');

export default async function discordHandling (data){
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
    client.once('ready', () => {
    
    const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);
    client.login(process.env.TOKEN);
    let songNameBuild = data.songName + data.songPath.substring(data.songPath.length-4, data.songPath.length);

    const audioFile = fs.readFileSync(data.songPath); 
    const song = new AttachmentBuilder(audioFile, {name: songNameBuild});
    
    const embed = new EmbedBuilder()
        .setTitle(data.artistName + " - " + data.songName)
        .addFields({name: 'Id', value: JSON.stringify(data.id)},
        )
        .setTimestamp()
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        .setAuthor({ name: 'Song Submission', iconURL: 'https://cdn.discordapp.com/attachments/899845943275454487/1092900368544968845/feelset-circle.png', url: 'https://www.youtube.com/c/feelset' })
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

        // arbitrary length tester
        if(JSON.stringify(data.instagram).length > 5){
            embed.addFields({name: 'Instagram', value: data.instagram});
        }
        if(JSON.stringify(data.twitter).length > 5){
            embed.addFields({name: 'Twitter', value: data.twitter});
        }
        if(JSON.stringify(data.spotify).length > 5){
            embed.addFields({name: 'Spotify', value: data.spotify});
        }
        if(JSON.stringify(data.soundcloud).length > 5){
            embed.addFields({name: 'Soundcloud', value: data.soundcloud});
        }
        if(JSON.stringify(data.linktree).length > 5){
            embed.addFields({name: 'Linktree', value: data.linktree});
        }
        

    channel.send({ embeds: [embed], components: [row], files: [song] });
    })

    await client.login(process.env.TOKEN);

    return new Promise((resolve) => {
        client.once('interactionCreate', async (interaction) => {
                const message = await interaction.channel.messages.fetch(interaction.message.id);
                const embed = message.embeds[0];
                const field = embed.fields[0];

                if(!interaction.isButton()) return;

                if (interaction.customId === "approve"){
                    await interaction.reply({content: `Approved. ID: ${field.value}`, ephemeral: true});
                    resolve({status: "approve", value: field.value});
                }else if (interaction.customId === "deny"){
                    await interaction.reply({content: `Denied. ID: ${field.value}`, ephemeral: true});
                    resolve({status: "deny", value: field.value});
                }
        });
    });
}




