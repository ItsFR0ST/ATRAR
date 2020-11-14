const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
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
    if (!user) return message.reply("Mention someone to shoot");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["RIP"];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author.username} is shooting ${user}\n` + ` ${replies[result]}`) 
        .setImage(sub)
        .setFooter(`ATRAR Version: 1.64`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "shoot",
    aliases: [""]
}
