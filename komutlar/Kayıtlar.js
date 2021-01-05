const Discord = require('discord.js');
const rdb = require('quick.db')
exports.run = async (client, message, args) => {
 
  
  let kayityetkili = '783345825345568788' //Kayıt yetkilisi İD
  if(!message.member.roles.cache.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let isim = message.mentions.members.first() || message.guild.members.get(args[0]);//Useri tanımladık
var sayi = 1 //Sıralam için sayı tanımladık
let data = rdb.get(`isim.${message.guild.id}`)//İsim verisini data diye tanımladık
let rol = rdb.fetch(`rol.${message.guild.id}`)
if(!data) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM") 
    .setThumbnail(user.user.avatarURL ({ dynamic: true}))      
    .setDescription(`
    ${isim} Adlı Kullanıcı Daha Önce Kayıt Olmamış.`)
    .setColor("RANDOM"))
let isimler = data.filter(x => x.userID === isim.id).map(x => `${sayi++}- \`• ${x.isim} | ${x.yas}\`  (<@&${x.role}>),`).join("\n")
if(isimler === null) isimler = "Kullanıcı hiç kayıt olmamış"
if(isimler === undefined) isimler = "Kullanıcı hiç kayıt olmamış"
    
  const embed = new Discord.MessageEmbed()
.setColor("RANDOM") 
    .setAuthor(`Bu Kullanıcı ${sayi-1} Kere Kayıt Olmuş`) 
    .setDescription(`
    ${isimler}`)
    .setColor("RANDOM")
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıtlar','isimler'],
  permLevel: 0
}
exports.help = {
  name: 'isimler',
  description: "kişinin eski isimlerini gösterir",
  usage: 'isimler @kişi'
}