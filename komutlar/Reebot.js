const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  if(message.author.id !== '383627939989946369','261877395240255491') return;
            message.channel.send(`Bot Yeniden Başlatılıyor.`).then(msg => {
                console.log(`Yeniden başlıyorum..`);
                process.exit(0);
            })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'reboot'
}