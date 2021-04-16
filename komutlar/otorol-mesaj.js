const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('**Otorol Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: `-oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('**Oto-Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'otorol-mesaj', 
    description: 'The Help Command',
    usage: 'help'
};