const Discord = require ("discord.js");
const db = require('quick.db');
const ayarlar = require ("../ayarlar.json")



exports.run = (client, message) => {
  
  
  
let botdavetlink = "https://discord.com/api/oauth2/authorize?client_id=831057896036630578&permissions=8&scope=bot"
let botprefix = ayarlar.prefix;

  
const thelelysstarafından = new Discord.MessageEmbed()



.setColor("BLUE")
.setTitle("Abooo Botumuzu Sunucuna Eklemeyi Unutmuşsun! Aşşağıdaki Bağlantıya Tıklayak Botumuzu Ekliye Bilirsin...")
.setDescription(`
[ZihiraBot Davet İçin Tıkla!](${botdavetlink})

Botumuz Şu Anda **${client.guilds.cache.size}** Sunucuya ve **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Kullanıcıya Hizmet Vermektedir.`)
.setTimestamp();
return message.channel.send(thelelysstarafından)

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'The Help Command',
    usage: 'help'
};