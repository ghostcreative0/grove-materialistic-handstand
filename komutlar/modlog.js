const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Ayarlanmayan bir şeyi sıfırlamazsın.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`Mod Log Kanalı Başarılı Bir Şekilde Sıfırlandı.`);
  
    return
  }
  
if (!logk) return message.channel.send(`Mod Log'u Ayarlacağım Bir Kanal Belirle.`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Mod Log Kanalı Başarıla Ayarlandı \n Ayarlanan Kanal = ${logk}`);

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}