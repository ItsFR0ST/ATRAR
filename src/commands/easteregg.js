const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const easter = new Discord.MessageEmbed()
    .setTitle('EasterEgg!!')
    .setColor('RANDOM')
    .setDescription(`you found the EASTER EGG dm the owner of the bot with screen shot of this message for a surprise`)
    message.channel.send(easter);
}

module.exports.help = {
    name: "!",
    aliases: ["eg"]
}