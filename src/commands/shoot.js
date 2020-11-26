const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
    'https://media.giphy.com/media/28p7K4xfPHK8w/giphy.gif',
    'https://media.giphy.com/media/10ZuedtImbopos/giphy.gif',
    'https://media.giphy.com/media/a5OCMAro7MGQg/giphy.gif',
    'https://media.giphy.com/media/a5OCMAro7MGQg/giphy.gif',
    'https://media.giphy.com/media/V4uJfpqjwqp3i/giphy.gif',
    'https://media.giphy.com/media/3otPoEo6QkvMUYVNEk/giphy.gif',
    'https://media.giphy.com/media/KzbDBThj4Azl5hqpuP/giphy.gif',
    'https://media.giphy.com/media/juRsmsnhUQJs4/giphy.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to shoot");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = [`Rip`, `He is dead`, `You got him ${message.author.username}`];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is shooting ${user}\n` + ` ${replies[result]}`) 
        .setImage(sub)
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "shoot",
    aliases: [""]
}
