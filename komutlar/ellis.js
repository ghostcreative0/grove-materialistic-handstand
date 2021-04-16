const Discord = require('discord.js'); //bu bir modül modüllerin ne işe yaradığını öğrenmek için 'Modül Yükleme' klasörüne


exports.run = (client, message) => {
const ellis = new Discord.MessageEmbed()

.setColor('#009e2a')
  .setTitle('Left4Dead Botu Ellis')
.setDescription('**Yaşı:**\n 23 Yaşında \n **Bilgileri:**\n Üniersiteli genç karakter. Savannahda yaşamaktadır. Tamir ve yapım ile arası iyidir nedeni boş zamanlarında arkadaşı Keith ile hurdalıkta düzenekler kurmalarıdır (Ellis in Keith ile birçok hikâyesi vardır)')
.setThumbnail('https://static.wikia.nocookie.net/left4dead/images/1/14/EllisWeaponsRender.jpg/revision/latest?cb=20091114030411')//sa
.setTimestamp()
.setFooter('Left4Dead');
  
  
message.channel.send(ellis)  

};

exports.conf = {
  enabled: true, //komutun açık kapalı olduğunu gösterir | true = açık false = kapalı
  guildOnly: false, //komutu herkes kullanabiliyormu onu gösterir
  aliases: ['1', '2'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'ellis', //adını belirtin (kullanmak için gereken komut) Örneğin otorol NOT Hangi ismi yazarsanız komut o isimle çalışır
  description: 'ellis', //komutun açıklaması
  usage: 'ellis' //komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
};