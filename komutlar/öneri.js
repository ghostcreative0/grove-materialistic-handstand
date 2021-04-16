const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("HATA!")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("ZihiraBot | Öneri Sistemi Başırılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "781791262344216626"; // Sunucu ID
 
  var channelID = "827610948008804382"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("GREEN")
 
      .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<a:onayland:826543185999298600>  | Öneren Kullanıcı:", message.author, true)
 
      .addField("<a:bughunter:825417160905982033> | Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<:evettt:825417394633048094> | Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);

  }

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'öneri', 
    description: 'The Help Command',
    usage: 'help'
};
 