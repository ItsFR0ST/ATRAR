const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to do that!");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (message.mentions.members.first() < 1) return message.reply('You must mention someone to warn them.');
    if (reason.length < 1) return message.reply('You must have a reason for the warning.');
    
    let embed = new Discord.MessageEmbed()
        .setTitle("Warn")
        .setColor("RANDOM")
        .setDescription(`You have been warned on \`${message.guild.name}\``)
        .addField("Warned by", message.author)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    user.send(embed);

    message.delete();

    message.channel.send(`✅ ${user} has been warned`)

}

module.exports.help = {
    name: 'warn',
    aliases: ['alert']
}