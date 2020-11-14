const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    var subreddits = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to cuddle");
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["It's cuddle time", "Cute Cuddle"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`UWU`, `Ok`, `Do it with someone else.`, `Thx`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '732645141839609958') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Why you choosed to cuddle yourself?`, `Cuddle someone else man.`, `Do you even know how to do that?`, `Don't use it on yourself!`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is cuddling ${user}\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "cuddle",
    aliases: [""]
}
