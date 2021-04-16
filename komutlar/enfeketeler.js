const Discord = require('discord.js'); //bu bir modül modüllerin ne işe yaradığını öğrenmek için 'Modül Yükleme' klasörüne


exports.run = (client, message) => {

const enfekte = new Discord.MessageEmbed()
.setColor('#009e2a')
.setTitle('Left4Dead Botu Enfekte Menüsü')
.addField('Boomer', 'Enfekteler arasında en az sağlık puanına sahip enfektedir. Hayatta kalanların üzerine kusarak etrafta bulunan yaygın enfekteleri hayatta kalanların üzerine çeker ve aynı zamanda kustuğu kişiler üzerinde geçici görüntü bulanıklığına neden olur.', true)
.addField('Charger', ' Bir kolu daha iri olan özel enfektedir. Uzun mesafe koşusu yaparak art arda dizilmiş karakterleri çarpma esnasında fırlatabilir ve yakaladığı herhangi bir sağ kalanı ise öldürene dek yere çarpar.', true)
.addField('Hunter', 'Yükseğe ve uzağa zıplama yeteneğine sahip özel enfektedir. Hayatta kalanların üzerine zıplayarak onları sırt üstü yatırır ve öldürene kadar pençeler.', true)
.addField('Jockey', 'Çökük bir şekilde ilerleyen ve bir insan boyuna kadar zıplayabilen özel enfektedir. Hayatta kalanların üzerine zıplayarak onları istediği yere yönlendirir ve yüzlerine vurarak canlarını azaltmaya çalışır. Yakaladığı sağ kalanı yere düşürene kadar bırakmaz.', true)
.addField('Smoker', ' Sürekli öksüren özel enfektedir. Herhangi bir sağ kalanı diliyle sarıp kendine çeker ve yakaladığı sağ kalanı ya yumruklayarak ya da havada asılı hâlde sıkarak öldürene kadar ona zarar verir. Öldüğünde diğer karakterlere zarar vermeyen ve karakterleri öksürten kısa süreli yeşil bir duman bırakır.', true)
.addField('Spitter', 'Asit tükürebilen özel enfektedir. Sağ kalanlara doğru asit tükürür asit üzerinde kalan sağ kalanlar asit üzerinde kaldığı sürece zarar görürler. Scavenge modunda ise yere bırakılan yakıt bidonlarını asit tükürerek yakabilirler. Öldüğünde öldüğü yere asit bırakır.', true)
.addField('Tank', 'Özel enfekteler arasında en çok sağlık puanına sahip özel enfektedir. Seçilen oyun zorluğuna göre 3000 ile 8000 sağlık puanına sahip olabilir. Tank oyunda rastgele bir bölümde ve zamanda sağ kalanların karşısına çıkar. Sağ kalanları yumruklayarak ileri fırlatır veya yerden bir kaya parçası koparıp onların üzerine atar. Ayrıca arabalara ve konteynerlere vurarak sağ kalanların üzerine fırlatır ve onları yere düşürür.', true)
.addField('Witch', '1000 sağlık puanına sahiptir. Oyun sırasında önceden belirlenmiş noktalarda oturarak veya ayakta gezerek ağlar. Direkt etkileşime girilmediği sürece hayatta kalanlara saldırıda bulunmaz. Bu karakterin saldırısını tetikleyebilmek için 2-8 saniye arasında değişen sürede çok yakınında gezmek, temas etmek, üzerine ya da yakınına ateş etmek veya üzerine fener ışığı tutmak gerekmektedir. Hayatta kalanları bir hamlede yere düşürür ve zorluk seviyesine göre tek saldırıda öldürebilir. Yere düşürdüğü karakterlere saldırarak hızlı bir şekilde ölmelerine neden olur.', true)
.setTimestamp()
.setImage('https://i.hizliresim.com/acEQE6.jpg')
.setFooter('Left4Dead Enfekte Menüsü');

message.channel.send(enfekte);
  
};



exports.conf = {
  enabled: true, //komutun açık kapalı olduğunu gösterir | true = açık false = kapalı
  guildOnly: false, //komutu herkes kullanabiliyormu onu gösterir
  aliases: ['enfekte-menüsü', '2'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'enfekteler', //adını belirtin (kullanmak için gereken komut) Örneğin otorol NOT Hangi ismi yazarsanız komut o isimle çalışır
  description: 'enfekteler', //komutun açıklaması
  usage: 'enfekteler' //komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
};