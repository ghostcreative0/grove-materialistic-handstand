const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, args) => { 
  
const thelelysstarafından = new Discord.MessageEmbed()


.setColor("BLUE")
.setTitle("ZihiraBot Yardım Menüm")
.setDescription(`
<a:elmas:831214596651745320> **MODERASYON** <a:elmas:831214596651745320>
<a:yazyor:826088579485794304> **\`küfür-engel aç/kapat\`,\`reklam-engel aç/kapat\`,\`mod-log #kanal\`,\`prefix ayarla\`,\`prefix sıfırla\`, \`temizle\`**
<a:elmas:831214596651745320> **GENEL** <a:elmas:831214596651745320>
<a:yazyor:826088579485794304> **\`avatar\`,\`öneri\`,\`davet\`
<a:elmas:831214596651745320> **SİSTEM** <a:elmas:831214596651745320>
<a:yazyor:826088579485794304> **\`sayaç-ayarla\`,\`sayaç-kapat\`,\`sayaç-hg-mesaj\`,\`sayaç-bb-mesaj\`**
**\`otorol-ayarla\`,\`otorol-kapat\`,\`otorol-mesaj\`,\`otorol-mesaj-kapat\`**
`)
 
.setTimestamp();
message.channel.send(thelelysstarafından)

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};