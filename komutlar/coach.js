const Discord = require('discord.js'); //bu bir modül modüllerin ne işe yaradığını öğrenmek için 'Modül Yükleme' klasörüne


exports.run = (client, message) => {
const coach = new Discord.MessageEmbed()

.setColor('#009e2a')
  .setTitle('Left4Dead Botu Coach')
.setDescription('**Yaşı:**\n 44 Yaşında \n **Bilgileri:**\n Freshman Football Team ın Koordinatörü ve bir okulda Sağlık Danışmanıdır. Savannah da yaşamaktadır.')
.setThumbnail('https://static.wikia.nocookie.net/left4dead/images/f/f3/CoachWeaponsRender.jpg/revision/latest?cb=20091114030350')//sa
.setTimestamp()
.setFooter('Left4Dead');
  
  
message.channel.send(coach)  

};

exports.conf = {
  enabled: true, //komutun açık kapalı olduğunu gösterir | true = açık false = kapalı
  guildOnly: false, //komutu herkes kullanabiliyormu onu gösterir
  aliases: ['1', '2'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'coach', //adını belirtin (kullanmak için gereken komut) Örneğin otorol NOT Hangi ismi yazarsanız komut o isimle çalışır
  description: 'coach', //komutun açıklaması
  usage: 'coach' //komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
};