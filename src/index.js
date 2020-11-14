const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props)

    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name)
    })
  })
})
bot.on('ready', () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
})

  setInterval(async () => {
    let statuslist = [
      `a.help to show commands`,
      `Thanks for buying the premium version`,
      `Enjoy the full features of the bot`,
      `Check the support server for your perks`
    ]
    const random = Math.floor(Math.random() * statuslist.length)

    bot.user.setActivity(`${statuslist[random]}`, { type: 'PLAYING' })
  }, 20000)

  bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = botconfig.prefix
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (message.guild.id === '765619528368914432') {
      if (bot.commands.has(cmd)) {
        commandfile = bot.commands.get(cmd);
      } else if (bot.aliases.has(cmd)) {
        commandfile = bot.commands.get(bot.aliases.get(cmd));
      }

      if (!message.content.startsWith(prefix)) return;


      try {
        commandfile.run(bot, message, args);

      } catch (e) {
      }
    } else {
      const nopremium = new Discord.MessageEmbed()
        .setTitle('Whoops')
        .setDescription(`Sorry you can't use that in this server, You should buy the bot  [Click Here](https://patreon.com/atrar)`,true)
        .setColor('#FF0000')
        .setFooter(`Version: 1.65`,)
        .setTimestamp()
      message.channel.send(nopremium);
    }

  })
  bot.login('Nzc2NDcxMDcxNDQzNzc5NjM0.X61XCQ.aVtHa2bJR3M_pKQx-VWFmhdCdHM');
