const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var subreddits = [
        'https://cdn.discordapp.com/attachments/738628884152451072/773464302660616202/giphy.gif',
        'https://cdn.discordapp.com/attachments/738628884152451072/773464314241482752/tumblr_mesbg2Txy71rt8ohzo1_500.gif',
        'https://cdn.discordapp.com/attachments/738628884152451072/773464311908532244/tenor.gif'
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = [`Sad :cry:`, `${message.author} is very sad can we make him happy?`, `Oh no why you sad?`];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setTitle('Sad Time :cry:')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "sad",
    aliases: [""]
}
