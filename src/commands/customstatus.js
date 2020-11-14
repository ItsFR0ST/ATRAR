const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setImage(`https://cdn.discordapp.com/attachments/358441505712635905/774245867397185556/image0.png`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(embed);
}


module.exports.help = {
    name: "customstatus",
    aliases: ["cs"]
}