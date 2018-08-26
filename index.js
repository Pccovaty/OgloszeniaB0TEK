const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

fs.readdir("./komendy/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.log("Nie znaleziono komend")
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komendy/${f}`);
    console.log(`Załadowano ${f}`);
    bot.commands.set(props.help.name, props)
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
    .setDescription("Masz problem z botem? napisz do ``๖̶̶̶ζ͜͡Kociak 💞#6365``") 
   message.channel.send(embed);
  }

  if(message.content === "<@469927027827408911>") {
    return message.channel.send("Aktualny prefix to ``--``.");


  }
  if(message.content === "ogloszenia prefix") {
    return message.channel.send("Aktualny prefix to ``--``.");
  }
  if(message.content === "Ogloszenia prefix") {
    return message.channel.send("Aktualny prefix to ``--``.");
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
    const eembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Komendy w bocie OgloszeniaBOT")
    .setDescription("``--say <treść>`` -> bot pisze to co ty napiszesz \n ``--poll <odp 1> <odp 2> <odp 3> -> bot robi ankiede z 3 odpowiedziami``  \n ``--news`` -> bot wysyła najnowsze newsy z serwera. \n ``--ogloszenia <treść>`` - bot wysyła ogloszenie na dany kanal \n ``Ping bota przez id`` -> bot pokazuje aktualny prefix \n ``--invite`` -> bot wysyła linka na zaproszenie na swój serwer, oraz zaproszenie na twój serwer.", "Wiecej informacji wkrótce ")
    .setFooter("Prefix na wszystkie komendy to --")
    message.channel.send(eembed)
  }
    if(cmd === "--invite"){
    const eambed = new Discord.RichEmbed() 
    .setColor('RANDOM')
    .setDescription("Zaproś bota na swój serwer! \n :link: https://discordapp.com/oauth2/authorize?client_id=469927027827408911&scope=bot&permissions=335560766 ")
    .setTitle("Dołącz do mojego discorda, gdzie mozesz otrzymać pomoc! \n https://discord.gg/pppgZCV")
    message.channel.send(eambed)
    }
  if(message.content.startsWith('--poll')) {

    let args = message.content.slice(1).split(" "); // komenda bez $ + argumenty oddzielone spacją
    console.log(args)
    args.shift(); // usuwa komendę
    args = args.join(" ").split("; ") // dołącza oddzielone spacją argumenty w jedność, oddziela je ;  (średnikiem i spacją)
    console.log(args)
    var title = args.shift(); // usuwa pierwszy argument; ustawia tytuł ankiety
    var opcje = args; // reszta argumentów
    console.log(title)
    console.log(opcje)
    if (opcje.length !== 3) return message.channel.send("Musisz podać tytuł i 3 opcje, oddzielone `;`.");
    let reply = ` **Pytanie:** \n ${title} \n\n **Odpowiedź:** \n ${opcje.map((o, i) => `${i + 1}: ${o}`).join("\n")}`;
    message.delete(0);
    message.channel.send({embed:  {
        color: 4456192,
        description: reply,
        footer: {
            icon_url: "https://images-ext-2.discordapp.net/external/SnhScc1ftasz44weF8_SF3gD16uJXwxQMCU8-XPAAeo/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/469927027827408911/1a04463a2e934f12f52f4758a965ad90.png?width=473&height=473",
            text: "OgloszeniaBOT | v0.0.5 (Beta)"
        
        }
    
    }
    }
    )

    .then(e => {
        e.react("1⃣").then(setTimeout(function () {
            e.react("2⃣").then(setTimeout(function () {
                e.react("3⃣")
            }, 500))
        }, 500))
    })

}});


 


bot.on("ready", async() => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("--help", {type: "WATCHING"});
});
bot.login(process.env.BOT_TOKEN)
