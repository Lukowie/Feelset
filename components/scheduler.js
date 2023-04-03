import discord from 'discord.js';
import ps from 'node-powershell';


import Bull from 'bull';
const discordWebhookUrl = '<your Discord webhook URL here>';

const songQueue = new Bull('songQueue');

export default async function Scheduler(req, res) {
   

}