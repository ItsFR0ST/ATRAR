const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setImage(`https://cdn.discordapp.com/attachments/358441505712635905/774248837904597012/image0.jpg`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(embed);
}


module.exports.help = {
    name: "gay",
    aliases: [""]
}