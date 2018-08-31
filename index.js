const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


});
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

  if(message.content === '--news') {
    const embed = new Discord.RichEmbed()
    .setTitle("Newsy z serwera!")
    .setDescription("usunieto komende ``--poll``") 
    .setFooter("Kociak (DEV)")
   message.channel.send(embed);
  }

bot.on("message", async message => {
  if (message.content === "<@469927027827408911>") {
    return message.channel.send("<:Info:484996951515856906> | mój prefix to ``--``.");
  }
   if(message.content === "--Cześć"){
    message.react("✅")
    return message.channel.send("Witaj")
  }
  if(cmd === "--say"){
    const sayMessage = args.join(" ")
    message.delete().catch();
    message.channel.send(sayMessage);
    message.react("452183703267835910");
  }
  if(cmd === "--oc"){
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("#9b0090")
      .setDescription("[**ogloszenie**] Hej <@&435826416488022017>")
      .addField("**opis**", args.join(" "))
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`);
 
  
    message.channel.send({embed});
    message.react("452183703267835910");
  
  }
     if(message.content === "--zapros"){
    message.react("✅")
    return message.channel.send("Dołącz do mojego discorda, gdzie mozesz otrzymać pomoc! \n https://discord.gg/pppgZCV \n \n \n Zaproś bota na swój serwer! \n :link: https://discordapp.com/oauth2/authorize?client_id=469927027827408911&scope=bot&permissions=335560766  ")
     }
       
    if(cmd === "--ogloszenia"){
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("#9b0090")
      .setDescription("[**ogloszenie**] Hej everyone!")
      .addField("**opis**", args.join(" "))
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`);

    message.channel.send({embed});
    message.react("452183703267835910");
    }
  if(cmd === "--help"){
    const bicon = bot.user.displayAvatarURL;
    const eembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .setTitle("Komendy w bocie OgloszeniaBOT")
    .setDescription("``--say <treść>`` -> bot pisze to co ty napiszesz \n ``~~--poll <odp 1> <odp 2> <odp 3>~~`` -> bot robi ankiede z 3 odpowiedziami \n ``--news`` -> bot wysyła najnowsze newsy z serwera. \n ``--ogloszenia <treść>`` - bot wysyła ogloszenie na dany kanal \n ``Ping bota przez id`` -> bot pokazuje aktualny prefix \n ``--invite`` -> bot wysyła linka na zaproszenie na swój serwer, oraz zaproszenie na twój serwer.", "Wiecej informacji wkrótce ")
    .setFooter("Prefix na wszystkie komendy to --")
    message.channel.send(eembed)
  }
    if(cmd === "--botinfo") {
    const bicon = bot.user.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle("Informacje dotyczące bota")
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField("Serwerów:", `${bot.guilds.size}`)
    .addField("Łącznie osób:", `${bot.users.size}`)
    .setFooter("By ๖̶̶̶ζ͜͡Kociak 💞#6365")
    message.channel.send(embed)
  }
    if(cmd === "--invite"){
    const eambed = new Discord.RichEmbed() 
    .setColor('RANDOM')
    .setTitle("Dołącz do mojego discorda, gdzie mozesz otrzymać pomoc! \n https://discord.gg/pppgZCV")
    .setDescription("Zaproś bota na swój serwer! \n :link: https://discordapp.com/oauth2/authorize?client_id=469927027827408911&scope=bot&permissions=335560766 ")
    message.channel.send(eambed)
    }

});



bot.on("ready", async() => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("by ๖̶̶̶ζ͜͡Kociak 💞#6365", {type: "WATCHING"});
});
bot.login(process.env.BOT_TOKEN);
