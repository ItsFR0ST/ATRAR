const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  botFetch = client.users.cache.get('732645141839609958')


  let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .addField('Bot Library', `This is a bot entirely made in Discord.js and other libraries.\n
    I really want to thank **Alex** for  some of his code.\n
    The bot is made by LoneFrosty#9026 & Alex!#5698.`)
    .addField('Credits:', `Bot Creator & Owner | 1st Dev: LoneFrosty#9026\n
    Helper & Developer | 2nd Dev: Alexx!#5698\n
    __Support Discord server__: https://discord.gg/zQTKaw5\n 
    __GitHub Source__: https://github.com/ItsFR0ST/ATRAR`)
      .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(botFetch.displayAvatarURL())
    .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
    message.channel.send(embed)




}

module.exports.help = {
  name: "credits",
  aliases: [""]
}