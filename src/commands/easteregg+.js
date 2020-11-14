const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setTitle("EASTER EGG!!!")
        .setColor("#00ff00")
        .addField('you found the EASTER EGG', `dm the owner of the bot with screen shot of this message for a surprise`);
    
        message.channel.send(embed);
        
        message.delete();
}

module.exports.help = {
    name: "+",
    aliases: ["++"]
}
