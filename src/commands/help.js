const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  botFetch = client.users.cache.get('732645141839609958')

  if (message.channel.type === "dm") return message.reply(embed)


  let embed = new Discord.MessageEmbed()
    .setTitle("Help Page [Prefix `a!`]")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .addField("RolePlay Commands", "`hug` `cuddle` `kiss` `slap` `kill` `shoot` `airstrikePUBG` `airstrike` `happy` `highfive` `lick` `nom` `nuzzle` `poke` `sad` `stare`")
    .setDescription("Note: If you want to add some replies to the commands such as `oof, RIP`\n so join the bot support server and add your suggetion in the server and it will be added soon")
    .addField("Staff Commands", "`announcement` `warn` `nick` `mute` `unmute` `ban` `softban` `unban` `clear` `delete` <--- These commands aren't ready to use ")
    .addField("Information Commands", "`serverinfo`  `userinfo` `botinfo` `botstats` `credits`")
    .addField("Fun Commands", "`avatar` `meme` `8ball` `dare` `truth` `gay` `avatar` `cs` `rickroll` `lovemeter` `gaymeter`")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Version: 1.65,`, botFetch.displayAvatarURL())
  message.channel.send(embed)




}

module.exports.help = {
  name: "help",
  aliases: [""]
}