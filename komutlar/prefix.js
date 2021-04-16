const db = require('quick.db');

exports.run = async (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = await db.fetch(`prefix_${message.guild.id}`)

    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`Bu Suncuda Prefix Komutu Ayarlı Değil.`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefix Başarıyla Sıfırlandı.`)
    return
  }
  
  if (!args[0])
    return message.channel.send(`Prefix'i Ayarlamak İçin Bir İşaret Belirle.`)
  await db.add(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix-ayarla',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};
 