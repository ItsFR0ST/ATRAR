const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let replies = [
    "**45%** :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: Pretty good.",
    "**5%** :heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: Very Sad :cry:",
    "**90%** :heart::heart::heart::heart::heart::heart:black_heart::black_heart: Perfect!",
    "**95%** :heart::heart::heart::heart::heart::heart::heart::black_heart: Awesome!",
    "**100%**:heart::heart::heart::heart::heart::heart::heart::heart: No words to explain this :heart:",
    "**0%** :black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: **RIP**",
    "**30%** :heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: Worse Than Excepted.",
    "**50** :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: Ok. "
];
    let result = Math.floor((Math.random() * replies.length));

    const error = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#FF0000')
        .setDescription(`You Havn't Choose anyone yet, Please Choose a member by mentioning or using ID`)
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
        .setTimestamp()
    if (!user) return message.channel.send(error)

    const shipmeter = new Discord.MessageEmbed()
    .setTitle('Love Meter')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .addField('The Love range between', `${message.author} & ${user}`)
    .setColor('#FFC0CB')
    .setDescription(replies[result])
    .setTimestamp()
    .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(shipmeter);

}
module.exports.help = {
    name: "lovemeter",
    aliases: ["lm", "shipmeter"]
}