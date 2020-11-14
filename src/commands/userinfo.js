const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.reply('You Must mention someone or yourself to see the userinfo!')
    if(!user) user = message.author

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${user.user.username}`, user.user.displayAvatarURL({ dynamic: true }))
        .addField('User Information', [
            `**» FullName:** ${user}\n
            **» Username:** ${user.user.username}\n
            **» User Tag:** ${user.user.discriminator}\n
            **» ID:** ${user.user.id}\n
            **» Avatar:** [Link to avatar](${user.user.displayAvatarURL({ dynamic: true })})\n
            **» Time Created:** ${moment(user.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss", true)}\n
            **» Server Join Date:** ${moment(user.user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss", true)}`
        ])
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
        .setTimestamp()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(embed);

};

module.exports.help = {
    name: "userinfo",
    aliases: ["ui"]
}
